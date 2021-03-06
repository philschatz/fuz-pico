import * as mst from 'euclideanmst'
import { IOutputter, Game, ObjectInstance, Camera, Size, SimpleObject, Opt, Dialog, SpriteController, IPosition } from '../common/engine'
import { categorize, toSnakeCase } from '../common/output'
import { DoubleArray } from '../common/doubleArray'
import { IRenderer, hexToRgb } from '../common/visual'
import { h, patch } from './vdom'
import { BUTTON_TYPE } from '../common/gamepad'
import { assertSomething, assertDefined } from '../common/util'

export class GridTableOutputter implements IOutputter {
  private readonly root: HTMLElement
  private prevDom: any

  constructor (root: HTMLElement) {
    this.root = root
  }

  draw (game: Game, tiles: Array<ObjectInstance<any>>, camera: Camera, curTick: number, grid: Size, overlayState: SimpleObject, pendingDialog: Opt<Dialog>, sprites: SpriteController) {
    const model = new DoubleArray<Set<string>>()

    tiles.forEach(t => {
      const spritenames = model.get(t.pos, new Set())
      spritenames.add(categorize(t.getMainSprite()._name))
    })

    const overlayInfo = ['Inventory Info:']
    for (const key in overlayState) {
      const v = overlayState[key]
      overlayInfo.push(`Item ${key} is ${v}`)
    }

    const next = h('table', null,
      h('caption', null, overlayInfo.join(' ')),
      h('tbody', null, ...model.asArray().filter(s => !!s).map(row => {
        return h('tr', null, ...row.filter(s => !!s).map(col => {
          return h('td', null, ...[...col.keys()].filter(s => !!s).map(s => {
            const snake = toSnakeCase(s)
            return h('span', { className: snake.toLowerCase() }, `${snake} `)
          }))
        }))
      }))
    )

    patch(this.root, next, this.prevDom)
    this.prevDom = next
  }
}

export class CanvasRenderer implements IRenderer {
  private readonly canvas: HTMLCanvasElement
  private readonly ctx: CanvasRenderingContext2D
  private imageData: ImageData
  private readonly pixelSize: number

  constructor (canvas: HTMLCanvasElement, pixelSize: number = 1) {
    this.pixelSize = pixelSize
    this.canvas = canvas
    this.ctx = assertSomething(canvas.getContext('2d'))
    this.imageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height)
  }

  drawStart () {
    this.imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
  }

  drawEnd () {
    this.ctx.putImageData(this.imageData, 0, 0)
  }

  drawPixel (pos: IPosition, hex: string) {
    // if (!(pos.x >= 0 && pos.y >= 0)) { throw new Error(`BUG: Tried to draw outside of the camera range ${JSON.stringify(pos)}`) }

    // this.ctx.fillStyle = hex
    // this.ctx.fillRect(pos.x * this.pixelSize, pos.y * this.pixelSize, this.pixelSize, this.pixelSize)

    const rgb = assertSomething(hexToRgb(hex))
    const i = (pos.y * this.imageData.width + pos.x) * 4
    const data = this.imageData.data
    data[i + 0] = rgb.r
    data[i + 1] = rgb.g
    data[i + 2] = rgb.b
    data[i + 3] = 255
  }
}

export const GRID_INSPECTOR_BUTTONS = [
  BUTTON_TYPE.CLUSTER_UP,
  BUTTON_TYPE.CLUSTER_LEFT,
  BUTTON_TYPE.CLUSTER_RIGHT,
  BUTTON_TYPE.CLUSTER_DOWN,
  BUTTON_TYPE.HOME,
  BUTTON_TYPE.SELECT,
  BUTTON_TYPE.BUMPER_BOTTOM_LEFT,
  BUTTON_TYPE.BUMPER_BOTTOM_RIGHT,
  BUTTON_TYPE.BUMPER_TOP_LEFT,
  BUTTON_TYPE.BUMPER_TOP_RIGHT
]

type Vert = number[] // [number, number]
interface Vertex {x: number, y: number, name: string}

export class GridInspector {
  private readonly table: HTMLTableElement
  private readonly logger: (msg: string) => void
  private lastPlayerPos: IPosition
  private relPos: IPosition
  constructor (table: HTMLTableElement, logger: (msg: string) => void) {
    this.table = table
    this.logger = logger
    this.listen = this.listen.bind(this)
    this.lastPlayerPos = { x: -2, y: -2 } // just invalid
    this.relPos = { x: 0, y: 0 }
  }

  listen (key: BUTTON_TYPE, pressed: boolean) {
    if (pressed) {
      let dx = 0
      let dy = 0
      switch (key) {
        case BUTTON_TYPE.CLUSTER_UP: dy = -1; break
        case BUTTON_TYPE.CLUSTER_LEFT: dx = -1; break
        case BUTTON_TYPE.CLUSTER_RIGHT: dx = 1; break
        case BUTTON_TYPE.CLUSTER_DOWN: dy = 1; break
        case BUTTON_TYPE.HOME:
        case BUTTON_TYPE.SELECT:
        case BUTTON_TYPE.BUMPER_BOTTOM_LEFT:
        case BUTTON_TYPE.BUMPER_BOTTOM_RIGHT:
        case BUTTON_TYPE.BUMPER_TOP_LEFT:
        case BUTTON_TYPE.BUMPER_TOP_RIGHT:
          return this.printTree()
        default: return
      }

      const newPlayerPos = this.findPlayerPos()
      if (this.lastPlayerPos.x !== newPlayerPos.x || this.lastPlayerPos.y !== newPlayerPos.y) {
        this.relPos = { x: dx, y: dy }
        this.lastPlayerPos = newPlayerPos
      } else {
        this.relPos = {
          x: this.relPos.x + dx,
          y: this.relPos.y + dy
        }
      }

      const pos = {
        x: this.lastPlayerPos.x + this.relPos.x,
        y: this.lastPlayerPos.y + this.relPos.y
      }
      const td = this.table.querySelector(`tr:nth-child(${pos.y + 1}) > td:nth-child(${pos.x + 1})`)
      if (td) {
        const sprites = Array.from(td.querySelectorAll('span')).map(s => s.innerHTML)
        this.logger(`${sprites.join(' ') || 'NOTHING'} @ (${pos.x}, ${pos.y})`)
      } else {
        this.logger('End of screen reached')
      }
    }
  }

  findPlayerPos () {
    const players = this.table.querySelectorAll('tr td .player')
    if (players.length !== 1) { throw new Error(`BUG: Expected to always find exactly 1 player but found ${players.length}`) }
    const player = players[0]
    const td = assertSomething(player.parentElement)
    const tr = assertSomething(td.parentElement)
    const tbody = assertSomething(tr.parentElement)
    return {
      x: indexOf(tr, td),
      y: indexOf(tbody, tr)
    }
  }

  printTree () {
    const nodes = new Map<Vert, string>()

    this.table.querySelectorAll('tr').forEach((tr, y) => {
      tr.querySelectorAll('td').forEach((td, x) => {
        td.querySelectorAll('span').forEach(span => {
          const v: [number, number] = [x, y]
          const name = assertSomething(span.textContent).trim().toLowerCase()

          // Skip Wall & Water sprites
          if (name === 'wall' || name === 'water') {
            return
          }

          if (nodes.get(v) !== 'player') { // make sure "player" is always in the tree
            nodes.set(v, name)
          }
        })
      })
    })

    const verts = [...nodes.keys()]

    const edgesWithVertIndex = mst.euclideanMST(verts, (a: Vert, b: Vert) => {
      return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)
    })

    const vertexes = verts.map((v) => ({ x: v[0], y: v[1], name: assertDefined(nodes.get(v)) }))
    const edges: Vertex[][] = edgesWithVertIndex.map(([v1Index, v2Index]) => [assertDefined(vertexes[v1Index]), assertDefined(vertexes[v2Index])])
    const player = assertDefined(vertexes.find(v => assertDefined(v.name).toLowerCase() === 'player'))
    const bfs = new BFS(edges, player)
    const msg = bfs.tickAll().map(({ from, to }) => {
      const dx = to.x - from.x
      const dy = to.y - from.y

      const ret = []
      if (dx !== 0) {
        ret.push(`${Math.abs(dx)} ${dx < 0 ? 'LEFT' : 'RIGHT'}`)
      }
      if (dy !== 0) {
        ret.push(`${Math.abs(dy)} ${dy < 0 ? 'UP' : 'DOWN'}`)
      }
      // say the longer distance first
      if (Math.abs(dx) < Math.abs(dy)) {
        ret.reverse()
      }
      return `${to.name} is ${ret.join(' AND ')} from ${from.name}.`
    })

    this.logger(`${msg.join(' ')}. `)
  }
}

interface BFSEdge {to: Vertex, from: Vertex}

class BFS {
  readonly edges = new Set<Vertex[]>()
  readonly visited = new Set<Vertex>()
  readonly queue: Array<{to: Vertex, from: Vertex}>
  constructor (edges: Vertex[][], root: Vertex) {
    this.edges = new Set(edges)
    this.queue = [{ to: root, from: root }]
  }

  tick (): BFSEdge | null {
    if (this.queue.length === 0) {
      if (this.edges.size !== 0) {
        throw new Error(`BUG: Expected edges to run out by now but there were still ${this.edges.size} left: ${JSON.stringify([...this.edges.keys()])}`)
      }
      return null
    }

    const { to, from } = assertDefined(this.queue.sort((a, b) => distance(a) - distance(b)).shift())
    const edgesToRemove = new Set<Vertex[]>()
    this.edges.forEach(e => {
      if (e[0] === to) {
        edgesToRemove.add(e)
        this.queue.push({ to: e[1], from: to })
      } else if (e[1] === to) {
        edgesToRemove.add(e)
        this.queue.push({ to: e[0], from: to })
      }
    })

    edgesToRemove.forEach(e => this.edges.delete(e))
    if (from === to) {
      return this.tick()
    } else {
      return { to, from }
    }
  }

  tickAll (): BFSEdge[] {
    const ret: BFSEdge[] = []
    let e: BFSEdge | null
    while ((e = this.tick()) !== null) {
      ret.push(e)
    }
    return ret
  }
}

function distance (e: {to: Vertex, from: Vertex}) {
  return Math.abs(e.to.x - e.from.x) + Math.abs(e.to.y - e.from.y)
}

function indexOf (parent: HTMLElement, child: Element): number {
  return Array.prototype.indexOf.call(parent.children, child)
}
