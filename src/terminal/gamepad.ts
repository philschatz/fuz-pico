import { readFileSync } from 'fs'
import * as HID from 'node-hid'
import { IGamepadRoot, IGamepad, BUTTON_TYPE, STICK_TYPE } from '../common/gamepad'
import ps3 from './ps3.json'
import ps4 from './ps4v2.json'
import { assertDefined, filterNulls } from '../common/util'

const configs = new Map<string, Config>()

addConfig(ps4)
addConfig(ps3)

function debug (message?: any, ...optionalParams: any[]) {
  // console.error(message, ...optionalParams)
}

interface ConfigButton {
  pin: number
  names: string[]
  value?: number
  mask?: number
  clearBit?: number
  bit?: number
}

interface ConfigJoystick {
  name: string
  xPin: number
  yPin: number
}

interface Config {
  vendorId: number
  productId: number
  buttons: ConfigButton[]
  joysticks: ConfigJoystick[]

  standard: {
    buttons: string[]
    axes: string[][] // [string, "x" | "y"][]
  }
}

function addConfig (c: Config) {
  configs.set(`${c.vendorId}/${c.productId}`, c)
}

const cache = new Map<string, Gamepad>()

interface IPosition {
  x: number
  y: number
}

class GamepadRoot implements IGamepadRoot {
  getGamepads (): IGamepad[] {
    const devices = HID.devices()
    const gamepadsOrNull = devices.map(d => {
      const c = configs.get(`${d.vendorId}/${d.productId}`)
      const path = assertDefined(d.path)
      if (c) {
        let i = cache.get(path)
        if (!i) {
          i = new Gamepad(path, c)
          cache.set(path, i)
        }
        return i
      } else {
        return null
      }
    })
    return filterNulls(gamepadsOrNull)
  }
}

export const gamepadRoot = new GamepadRoot()

class Gamepad implements IGamepad {
  private readonly path: string
  private readonly config: Config
  private usb: HID.HID | null
  private lastUpdated = -1

  private readonly jStates = new Map<string, IPosition>()
  private readonly bStates = new Set<string>()

  private standardButtons: Button[] | undefined

  constructor (path: string, config: Config) {
    this.path = path
    this.config = config
    this.usb = new HID.HID(path)

    this.usb.on('data', this.onUsbFrame.bind(this))
    process.on('exit', this.disconnect.bind(this))
  }

  tick () {
    // Nothing to do, this pulls data off the usb stream directly
  }

  disconnect () {
    if (this.usb) {
      this.usb.close()
      this.usb = null
    }
    cache.delete(this.path)
  }

  private onUsbFrame (data: number[]) {
    this.processJoysticks(data)
    this.processButtons(data)
    this.lastUpdated = Date.now()
  }

  private processJoysticks (data: number[]) {
    if (!this.config.joysticks) { return }

    this.config.joysticks.forEach(j => {
      let x = data[j.xPin]
      let y = data[j.yPin]
      x = (x - 127) / 128
      y = (y - 127) / 128
      this.jStates.set(j.name, { x, y })
    })
  }

  private processButtons (data: number[]) {
    this.config.buttons.forEach(b => {
      const v = data[b.pin]
      let newState = false
      if (b.bit !== undefined) {
        // This is used by the PS4 Controller's cluster keys
        const bitNum = 1 << b.bit
        newState = (v & bitNum) === bitNum
      } else if (b.clearBit !== undefined) {
        // This is used by the PS4 Controller's DPAD_UP key
        const cbitNum = 1 << b.clearBit
        const noDpad = (v & cbitNum) === cbitNum
        if (noDpad) {
          newState = false
        } else {
          newState = (v & assertDefined(b.mask)) === b.value
        }
      } else if (b.mask) {
        // This is used by the PS4 Controller's DPAD_* keys
        newState = (v & b.mask) === b.value
      } else {
        newState = v === b.value
      }

      // Update the state of the button.
      // Diagonal buttons should only turn ON the dPad, never turn them off.
      // This is because the player could be pressing DPAD_UP and that still needs to be true
      if (b.names.length === 1 || newState) {
        b.names.forEach(n => { if (newState) { this.bStates.add(n) } else { this.bStates.delete(n) } })
      }
    })
    this.lastUpdated = Date.now()
  }

  isButtonPressed (btn: BUTTON_TYPE) {
    return this.bStates.has(btn)
  }

  getStickCoordinates (stick: STICK_TYPE) {
    return this.jStates.get(stick) ?? null
  }

  // ------------------------------------
  // Gamepad API support
  // See https://developer.mozilla.org/en-US/docs/Web/API/Gamepad
  // ------------------------------------

  get buttons () {
    let s = this.standardButtons
    if (!s) {
      s = this.config.standard.buttons.map(name => new Button(this.bStates, name))
      this.standardButtons = s
    }
    return s.map((b, index) => {
      return { pressed: b.pressed, value: index }
    })
  }

  get axes () {
    return this.config.standard.axes.map(([name, xy]) => {
      const j = this.jStates.get(name)
      if (j) {
        switch (xy) {
          case 'x': return j.x
          case 'y': return j.y
          default: throw new Error('ERROR: Invalid axis. Must be x or y')
        }
      }
      return 0
    })
  }

  get mapping () {
    return this.config.standard ? 'standard' : ''
  }

  get timestamp () {
    return this.lastUpdated
  }
}

class Button {
  private readonly bStates: Set<string>
  private readonly name: string
  constructor (bStates: Set<string>, name: string) {
    this.bStates = bStates
    this.name = name
  }

  get pressed () {
    return this.bStates.has(name)
  }

  get value () {
    return this.pressed ? 1.0 : 0.0
  }
}

const KEY_REPEAT_WITHIN = 110 // MacOS seems to repeat at 80ms (up to 102ms)

export class KeyboardGamepad implements IGamepad {
  timestamp = Date.now()
  private curPressed: string
  private readonly keyConfig: Map<BUTTON_TYPE, string[]>
  private readonly pipedKeys: Array<string|null> = []

  // Gamepad API. TODO: Actually map it (not too hard)
  buttons = []
  axes = []
  mapping = 'none'

  constructor (keyConfig: Map<BUTTON_TYPE, string[]>) {
    this.curPressed = ''
    this.keyConfig = keyConfig

    // Prepare the keyboard handler
    if (process.stdin.setRawMode) {
      process.stdin.setRawMode(true)
    } else {
      console.warn('WARNING: stdin does not allow setting setRawMode (we need that for keyboard input). Maybe you are piping keys in via stdin?')
      this.pipedKeys = readFileSync(0).toString().split('')
      this.pipedKeys.push(null) // add this character so we exit the process
    }
    process.stdin.resume()
    process.stdin.setEncoding('utf8')

    // https://stackoverflow.com/a/30687420
    process.stdin.on('data', (key: string) => {
      if (this.timestamp > 0) debug('Time since last keystroke detected:', Date.now() - this.timestamp)
      this.timestamp = Date.now()

      switch (key) {
        case '\u0003': // Ctrl+C
        case '\u001B': // Escape
          return process.exit(1)
        default:
          this.curPressed = key
      }
    })
  }

  tick () {
    // feed the piped keys in one tick at a time
    const key = this.pipedKeys.shift()
    if (!key && !process.stdin.setRawMode) {
      console.log('Done reading piped input so exiting.')
      return process.exit(0)
    } else {
      if (key) {
        this.timestamp = Date.now() + 100 * 1000 // ensure that we do not hit they key interval
        this.curPressed = key
      }
    }
  }

  isButtonPressed (btn: BUTTON_TYPE) {
    const c = this.keyConfig.get(btn)
    return c ? c.indexOf(this.getCurPressed()) >= 0 : false
  }

  getStickCoordinates (stick: STICK_TYPE) {
    return null
  }

  private getCurPressed () {
    if (this.timestamp + KEY_REPEAT_WITHIN < Date.now()) {
      this.curPressed = ''
    }
    return this.curPressed
  }
}

export class AnyGamepad implements IGamepad {
  timestamp = 0
  private readonly polling: number
  private pads: IGamepad[] = []

  // Gamepad API. TODO: Implement (not hard)
  buttons = []
  axes = []
  mapping = 'none'

  constructor (pollingInterval: number) {
    this.polling = pollingInterval
  }

  tick () { for (const pad of this.pads) { pad.tick() } }

  isButtonPressed (btn: BUTTON_TYPE) {
    if (this.timestamp + this.polling < Date.now()) {
      this.pads = gamepadRoot.getGamepads()
      this.timestamp = Date.now()
    }
    for (const pad of this.pads) {
      if (pad.isButtonPressed(btn)) { return true }
    }
    return false
  }

  getStickCoordinates (stick: STICK_TYPE) {
    const farthest = new Map<number, IPosition>()
    let max = -1
    for (const pad of this.pads) {
      const c = pad.getStickCoordinates(stick) ?? { x: 0, y: 0 }
      const distance = Math.abs(c.x) + Math.abs(c.y)
      max = Math.max(max, distance)
      farthest.set(distance, c)
    }
    if (max > 0) {
      return farthest.get(max) ?? null
    }
    return { x: 0, y: 0 }
  }
}
