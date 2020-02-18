import { DefiniteMap, Image } from "./engine"

export function loadImages() {
  const images = new DefiniteMap<Image>()
  const Z = null // transparent

  const a = '#73c2b4'
  const b = '#c2ffeb'
  const c = '#06353b'
  const d = '#306387'
  const e = '#dec78f'
  const f = '#ffffe2'
  const g = '#000000'
  const h = '#93c453'
  const i = '#6a0009'
  const j = '#6b241b'
  const k = '#fd9150'
  const l = '#fed4a3'
  const m = '#fffff2'
  const n = '#e72e3d'
  const o = '#fc7953'
  const p = '#139dec'
  const q = '#3f6d54'
  const r = '#c09d53'
  const s = '#213531'
  const t = '#599388'
  const u = '#ffffff'
  images.add('Sand', new Image([
    [ a, a, b, a, b, b, b, b, b, b, b, b, b, b, a, a, ],
    [ a, a, a, b, a, b, b, b, b, b, b, b, b, b, b, a, ],
    [ a, a, a, a, b, a, b, b, b, b, b, b, b, b, b, b, ],
    [ b, a, a, a, a, b, a, b, a, b, b, b, b, b, b, b, ],
    [ b, b, a, a, a, a, a, a, b, a, b, b, b, b, b, b, ],
    [ b, b, b, a, a, a, a, a, a, b, a, a, b, b, b, b, ],
    [ b, b, b, b, b, a, a, a, a, a, a, b, a, a, b, b, ],
    [ b, b, b, b, b, b, b, b, a, a, a, a, a, b, a, b, ],
    [ b, b, b, b, b, b, b, b, b, a, a, a, a, a, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, a, a, a, a, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, a, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, ],
    [ a, b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, ],
    [ a, a, b, b, b, b, b, b, b, b, b, b, b, b, a, a, ],
  ]))
  images.add('Rock', new Image([
    [ b, b, b, b, b, b, c, c, c, c, b, b, b, b, b, b, ],
    [ b, b, b, c, c, c, a, a, a, a, c, c, b, b, b, b, ],
    [ b, b, c, a, b, b, a, b, b, b, a, a, c, b, b, b, ],
    [ b, c, a, b, b, d, a, b, b, b, b, b, a, c, b, b, ],
    [ b, c, a, a, b, d, d, a, b, b, b, a, a, b, c, b, ],
    [ b, c, a, a, a, b, d, d, a, a, a, d, a, a, c, b, ],
    [ b, c, a, a, a, a, a, d, a, a, a, d, d, c, c, b, ],
    [ b, c, c, d, a, a, a, a, a, a, a, d, d, b, c, c, ],
    [ b, a, c, c, d, a, a, a, a, a, d, d, b, b, b, c, ],
    [ b, a, c, b, a, a, a, b, b, a, a, a, a, a, b, c, ],
    [ a, c, b, a, b, d, a, a, a, b, c, d, a, a, a, c, ],
    [ a, c, d, a, a, b, c, d, a, b, c, d, a, a, a, c, ],
    [ a, c, d, d, a, b, c, d, a, a, c, c, d, a, a, c, ],
    [ a, c, c, c, d, d, c, c, d, c, c, c, c, d, c, b, ],
    [ a, a, c, c, c, c, a, a, a, a, a, c, c, c, b, b, ],
    [ b, a, a, a, a, a, a, b, b, a, a, a, a, a, b, b, ],
  ]))
  images.add('Bush', new Image([
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, c, c, b, b, b, b, b, b, b, ],
    [ b, b, b, b, c, c, c, e, c, c, c, c, b, b, b, b, ],
    [ b, b, b, c, e, c, c, e, e, c, c, b, c, b, b, b, ],
    [ b, b, c, c, c, e, c, e, b, c, b, c, c, c, b, b, ],
    [ b, c, e, e, c, c, e, e, e, b, c, c, e, e, c, b, ],
    [ b, b, c, e, e, c, c, c, c, c, c, e, e, c, b, b, ],
    [ b, b, c, e, c, e, c, c, e, c, e, c, b, c, b, b, ],
    [ d, b, c, c, c, c, c, e, b, c, c, c, c, c, b, d, ],
    [ b, c, e, c, c, e, e, e, e, e, b, c, c, b, c, b, ],
    [ e, c, e, e, c, c, e, e, e, e, c, c, b, b, c, b, ],
    [ e, c, c, e, e, c, c, c, c, c, c, e, e, c, c, b, ],
    [ b, e, c, c, c, c, e, e, e, b, c, c, c, c, b, b, ],
    [ b, e, e, c, c, c, c, c, c, c, c, c, c, b, b, b, ],
    [ b, b, e, e, e, e, c, c, c, c, e, e, e, b, b, b, ],
    [ b, b, b, e, e, e, e, e, e, e, e, b, b, b, b, b, ],
  ]))
  images.add('Pedestal', new Image([
    [ Z, Z, d, d, d, d, d, d, d, d, d, d, d, Z, Z, Z, ],
    [ Z, d, a, a, a, a, a, a, a, a, a, a, a, d, Z, Z, ],
    [ d, d, b, d, d, d, d, d, d, d, d, d, a, d, d, Z, ],
    [ d, d, b, d, a, d, a, a, b, d, a, d, a, d, d, Z, ],
    [ d, d, b, d, d, a, a, a, a, b, d, d, a, d, d, Z, ],
    [ d, d, b, d, a, a, a, a, a, a, b, d, a, d, d, Z, ],
    [ d, d, b, d, a, a, a, a, a, a, a, d, a, d, d, Z, ],
    [ d, d, b, d, d, a, a, a, a, a, d, d, a, d, d, Z, ],
    [ d, d, b, d, a, d, a, a, a, d, a, d, a, d, d, Z, ],
    [ d, d, b, d, d, d, d, d, d, d, d, d, a, d, d, Z, ],
    [ d, d, b, b, b, b, b, b, b, b, b, b, b, d, d, a, ],
    [ d, d, a, a, a, a, a, a, a, a, a, a, b, d, d, a, ],
    [ d, a, d, d, d, d, d, d, d, d, d, d, d, b, d, a, ],
    [ d, a, a, a, a, a, a, a, a, a, a, a, a, a, d, a, ],
    [ a, d, d, d, d, d, d, d, d, d, d, d, d, d, a, a, ],
    [ Z, a, a, a, a, a, a, a, a, a, a, a, a, a, Z, Z, ],
  ]))
  images.add('WallTopRightDown', new Image([
    [ b, b, a, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ b, a, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ a, c, c, c, a, a, a, a, a, a, a, a, a, a, a, a, ],
    [ c, c, c, a, a, a, a, a, a, a, a, a, a, a, a, a, ],
    [ c, c, a, a, a, a, a, a, a, a, a, a, a, a, a, a, ],
    [ c, c, a, a, a, a, a, a, a, a, a, a, a, a, a, a, ],
    [ c, c, a, a, a, a, a, c, c, c, c, c, c, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, b, b, b, b, b, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, b, b, b, b, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, b, b, a, a, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, b, a, a, a, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, a, a, a, c, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, a, a, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, c, c, c, c, c, c, ],
  ]))
  images.add('Key', new Image([
    [ Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, Z, f, f, f, f, Z, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, f, g, g, g, g, f, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, f, g, f, f, f, f, g, f, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, f, g, h, g, g, f, g, f, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, f, g, h, g, g, f, g, f, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, f, g, h, h, h, h, g, f, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, f, g, g, h, g, f, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, f, g, Z, h, g, f, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, f, g, g, h, g, f, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, f, g, h, h, g, f, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, Z, h, g, g, h, Z, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, Z, Z, h, h, Z, Z, Z, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, ],
  ]))
  images.add('SandEdge', new Image([
    [ a, a, a, b, b, b, b, b, b, b, b, b, b, b, a, a, ],
    [ a, a, a, a, b, b, b, b, b, b, b, b, b, b, b, a, ],
    [ b, a, a, a, a, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, a, a, a, a, a, b, a, b, a, b, b, b, b, b, ],
    [ b, b, b, a, a, a, a, a, a, a, b, a, b, b, b, b, ],
    [ b, b, b, b, a, a, a, a, a, a, a, a, a, a, a, b, ],
    [ b, b, b, b, b, b, b, b, a, a, a, a, a, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, a, a, a, a, a, a, a, a, b, b, ],
    [ a, a, a, p, p, p, p, p, p, p, p, p, p, p, a, a, ],
    [ p, p, p, p, b, b, b, b, b, b, b, b, p, p, p, p, ],
    [ p, p, b, b, b, b, a, p, a, p, a, b, b, b, b, p, ],
    [ p, a, b, a, p, a, p, a, p, a, p, a, p, a, p, a, ],
    [ a, p, a, p, a, p, p, p, p, p, p, p, a, p, a, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
  ]))
  images.add('Box', new Image([
    [ a, g, g, g, g, g, g, g, g, g, g, g, g, g, g, a, ],
    [ g, g, j, k, k, k, k, k, k, k, k, k, k, j, g, g, ],
    [ g, j, j, g, g, g, g, g, g, g, g, g, g, j, j, g, ],
    [ g, k, g, g, k, j, k, k, k, k, k, k, g, g, k, g, ],
    [ g, k, g, k, k, j, k, j, j, j, j, k, k, g, k, g, ],
    [ g, k, g, k, k, j, j, j, j, k, j, k, k, g, k, g, ],
    [ g, k, g, g, k, k, k, k, k, k, j, k, g, g, k, g, ],
    [ g, j, j, g, g, g, g, g, g, g, g, g, g, j, j, g, ],
    [ g, g, j, k, k, k, k, k, k, k, k, k, k, j, g, g, ],
    [ g, j, g, g, g, g, g, g, g, g, g, g, g, g, j, g, ],
    [ g, g, j, j, j, j, j, g, g, j, j, j, j, j, g, g, ],
    [ g, j, g, g, g, g, j, g, g, j, g, g, g, g, j, g, ],
    [ g, j, g, j, j, g, j, g, g, j, g, j, j, g, j, g, ],
    [ g, j, g, g, j, g, j, g, g, j, g, j, g, g, j, g, ],
    [ g, g, j, j, j, g, j, j, j, j, g, j, j, j, g, g, ],
    [ a, g, g, g, g, g, g, g, g, g, g, g, g, g, g, a, ],
  ]))
  images.add('GongRed', new Image([
    [ i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, ],
    [ i, l, l, l, l, l, l, i, i, l, l, l, l, l, l, i, ],
    [ b, i, i, i, i, i, i, i, i, i, i, i, i, i, i, b, ],
    [ b, i, n, i, b, b, i, i, i, i, b, b, i, l, i, b, ],
    [ b, i, n, i, b, i, i, l, l, i, i, b, i, l, i, b, ],
    [ b, i, n, i, b, i, n, n, l, l, i, b, i, l, i, b, ],
    [ b, i, n, i, b, i, n, i, i, l, i, b, i, l, i, b, ],
    [ b, i, n, i, b, i, i, n, n, i, i, b, i, l, i, b, ],
    [ i, n, l, i, b, i, n, i, i, l, i, b, i, n, l, i, ],
    [ i, n, l, i, b, i, i, n, n, i, i, b, i, n, l, i, ],
    [ i, n, l, i, b, i, n, i, i, l, i, b, i, n, n, i, ],
    [ i, n, n, i, b, b, i, i, i, i, b, b, i, n, n, i, ],
    [ i, n, n, i, b, b, b, b, b, b, b, b, i, n, n, i, ],
    [ i, n, n, i, b, i, i, i, i, b, b, b, i, n, n, i, ],
    [ i, n, n, i, b, b, b, i, i, i, i, b, i, n, n, i, ],
    [ b, i, i, b, b, b, b, b, b, b, b, b, b, i, i, b, ],
  ]))
  images.add('PillarRed', new Image([
    [ b, b, b, b, b, b, i, i, i, i, b, b, b, b, b, b, ],
    [ b, b, b, b, i, i, l, l, l, l, i, i, b, b, b, b, ],
    [ b, b, b, i, l, l, l, l, l, l, l, l, i, b, b, b, ],
    [ b, b, b, i, l, n, l, l, l, l, n, l, i, b, b, b, ],
    [ b, b, i, n, i, n, l, l, l, l, n, i, l, i, b, b, ],
    [ b, b, i, n, i, n, n, l, l, n, n, i, n, i, b, b, ],
    [ b, b, i, i, n, n, n, n, n, n, n, n, n, i, b, b, ],
    [ b, b, i, i, i, n, n, n, n, n, n, n, i, i, b, b, ],
    [ b, b, i, i, n, n, n, i, i, n, n, i, l, i, b, b, ],
    [ b, b, i, i, n, n, i, n, n, i, n, l, n, i, b, b, ],
    [ b, n, i, i, n, n, n, i, i, n, n, n, i, i, b, b, ],
    [ b, n, i, i, i, n, n, n, n, n, n, i, l, i, b, b, ],
    [ b, n, i, i, n, i, i, i, i, i, i, l, i, i, b, b, ],
    [ b, n, n, i, i, n, n, n, n, n, n, i, i, b, b, b, ],
    [ b, b, n, n, i, i, i, i, i, i, i, i, n, b, b, b, ],
    [ b, b, b, n, n, n, n, n, n, n, n, n, b, b, b, b, ],
  ]))
  images.add('WallTopUpDown', new Image([
    [ c, c, c, a, a, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, b, b, c, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, a, a, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, a, a, a, c, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, a, a, a, c, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, b, a, a, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, c, c, a, a, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, c, c, c, a, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, b, c, c, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, b, b, c, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, b, a, a, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, a, a, c, c, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, a, a, a, c, c, ],
    [ c, c, a, a, a, a, c, c, c, b, b, a, a, a, c, c, ],
    [ c, c, a, a, a, a, c, c, c, c, c, b, a, a, c, c, ],
    [ c, c, c, a, a, c, c, c, c, c, c, c, c, a, c, c, ],
  ]))
  images.add('PlayerPushingRight', new Image([
    [ Z, Z, Z, g, Z, g, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, ],
    [ Z, Z, g, m, g, m, g, Z, g, g, g, g, Z, Z, Z, Z, ],
    [ Z, g, g, g, Z, g, g, g, g, m, g, g, g, g, Z, Z, ],
    [ g, m, m, g, Z, g, g, g, g, g, g, m, g, m, g, Z, ],
    [ Z, g, g, g, g, g, g, g, g, g, g, g, g, o, g, Z, ],
    [ Z, Z, Z, Z, g, g, g, g, g, g, g, g, g, g, g, Z, ],
    [ Z, Z, Z, g, g, g, g, g, g, o, o, m, g, g, g, Z, ],
    [ Z, Z, Z, Z, g, g, m, g, g, g, o, m, g, o, g, Z, ],
    [ Z, Z, Z, Z, Z, g, m, m, g, g, g, o, g, g, g, g, ],
    [ Z, Z, Z, Z, Z, Z, g, g, g, o, o, g, o, m, o, g, ],
    [ Z, Z, Z, Z, Z, Z, g, g, o, o, g, o, o, m, o, g, ],
    [ Z, Z, Z, Z, Z, g, g, m, o, o, o, g, g, g, g, b, ],
    [ Z, Z, Z, Z, g, o, m, g, m, m, m, g, g, Z, Z, Z, ],
    [ Z, Z, Z, g, o, o, g, m, g, m, g, m, g, Z, Z, Z, ],
    [ Z, Z, Z, g, o, g, g, g, g, g, g, o, o, g, Z, Z, ],
    [ Z, Z, g, g, g, g, g, g, g, g, g, g, g, g, Z, Z, ],
  ]))
  images.add('Land', new Image([
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, e, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, e, b, e, b, e, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, e, b, e, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, e, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, e, b, e, b, e, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
  ]))
  images.add('Lock', new Image([
    [ f, g, g, g, g, g, g, g, g, g, g, g, g, g, g, f, ],
    [ g, q, q, f, f, f, f, h, q, f, f, f, f, q, q, g, ],
    [ g, q, q, q, q, q, q, q, q, q, q, q, q, q, f, g, ],
    [ g, q, q, q, h, h, h, h, h, h, h, h, q, f, f, g, ],
    [ g, q, q, q, h, h, f, g, g, h, h, h, q, f, f, g, ],
    [ g, q, q, q, h, f, g, g, g, g, h, h, q, f, f, g, ],
    [ g, q, q, q, h, f, g, g, g, g, h, h, q, f, f, g, ],
    [ g, q, h, q, h, h, f, g, g, h, h, h, q, q, f, g, ],
    [ g, h, q, q, h, h, f, g, g, h, h, h, q, f, q, g, ],
    [ g, q, q, q, h, h, h, f, f, h, h, h, q, f, f, g, ],
    [ g, q, q, q, h, h, h, h, h, h, h, h, q, f, f, g, ],
    [ g, q, q, q, q, q, q, q, q, q, q, q, q, f, f, g, ],
    [ g, q, q, h, h, h, h, f, q, h, h, h, h, q, f, g, ],
    [ g, q, h, h, h, h, h, f, q, h, h, h, h, h, q, g, ],
    [ g, h, h, h, h, h, h, f, q, h, h, h, h, h, h, g, ],
    [ f, g, g, g, g, g, g, g, g, g, g, g, g, g, g, f, ],
  ]))
  images.add('ArrowLeft', new Image([
    [ f, g, g, g, g, g, g, g, g, g, g, g, g, g, g, f, ],
    [ g, q, q, f, f, f, f, f, f, f, f, f, f, q, q, g, ],
    [ g, q, q, q, q, q, q, q, q, q, q, q, q, q, f, g, ],
    [ g, q, q, q, h, h, h, g, g, g, g, h, q, f, f, g, ],
    [ g, q, q, q, h, g, g, f, f, f, g, h, q, f, f, g, ],
    [ g, q, q, q, g, f, f, f, f, g, h, h, q, f, f, g, ],
    [ g, q, q, q, g, q, q, q, q, g, h, h, q, f, f, g, ],
    [ g, q, q, q, q, g, g, q, q, q, g, h, q, f, f, g, ],
    [ g, q, q, q, h, q, q, g, g, g, g, h, q, f, f, g, ],
    [ g, q, q, q, h, h, h, q, q, q, q, h, q, f, f, g, ],
    [ g, q, q, q, h, h, h, h, h, h, h, h, q, f, f, g, ],
    [ g, q, q, q, q, q, q, q, q, q, q, q, q, f, f, g, ],
    [ g, q, q, h, h, h, h, h, h, h, h, h, h, q, f, g, ],
    [ g, q, h, q, q, h, q, q, q, q, h, q, q, h, q, g, ],
    [ g, h, q, h, q, q, q, h, h, q, q, q, h, q, h, g, ],
    [ f, g, g, g, g, g, g, g, g, g, g, g, g, g, g, f, ],
  ]))
  images.add('WallTopLeftRight', new Image([
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, a, a, a, a, a, a, a, a, a, a, a, a, a, a, c, ],
    [ a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, ],
    [ a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, ],
    [ c, a, a, a, a, a, a, a, a, a, a, a, a, a, a, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, b, b, b, b, b, c, c, c, b, b, b, b, b, c, c, ],
    [ b, b, b, b, b, b, b, c, b, b, b, b, b, b, b, c, ],
    [ a, a, a, a, b, b, b, c, a, b, b, a, a, a, a, c, ],
    [ c, a, a, a, a, a, c, c, a, a, a, a, a, a, c, c, ],
    [ c, c, a, a, a, c, c, c, c, c, a, a, a, c, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
  ]))
  images.add('WallTopUpLeft', new Image([
    [ c, c, a, a, a, a, c, c, c, c, c, c, c, c, c, c, ],
    [ c, a, a, a, a, a, c, c, c, c, b, b, c, c, c, c, ],
    [ a, a, a, a, a, c, c, c, c, b, b, a, a, c, c, c, ],
    [ a, a, a, a, a, c, c, c, c, b, b, a, a, c, c, c, ],
    [ a, a, a, a, c, c, c, c, c, b, b, b, a, c, c, c, ],
    [ a, a, c, c, c, c, c, c, c, b, b, a, a, a, c, c, ],
    [ c, c, c, c, c, c, c, c, c, b, b, a, a, a, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, b, a, a, a, c, c, ],
    [ c, c, c, c, c, c, b, b, c, c, c, a, a, a, c, c, ],
    [ c, c, b, b, b, b, b, b, b, c, c, a, a, c, c, c, ],
    [ c, b, b, b, b, b, b, a, a, c, c, a, c, c, c, c, ],
    [ c, b, b, b, a, a, a, a, a, c, c, c, c, c, c, c, ],
    [ c, a, a, a, a, a, a, a, a, c, c, c, c, c, c, c, ],
    [ c, a, a, a, a, a, a, a, c, c, c, c, c, b, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, b, b, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, b, b, b, c, c, ],
  ]))
  images.add('PlayerPushingUp', new Image([
    [ Z, g, g, g, Z, g, g, g, g, g, g, Z, g, g, g, Z, ],
    [ g, o, o, g, g, g, g, g, g, g, g, g, o, o, g, Z, ],
    [ g, m, g, g, g, g, g, g, g, g, g, g, g, g, g, g, ],
    [ g, o, g, g, g, g, g, g, g, g, g, g, g, g, g, g, ],
    [ g, o, g, g, g, g, g, g, g, g, g, g, g, g, o, g, ],
    [ g, g, g, m, g, g, g, g, g, g, g, g, m, g, g, g, ],
    [ Z, g, g, g, g, g, g, g, g, g, g, g, g, g, g, Z, ],
    [ Z, Z, g, g, o, o, g, g, g, g, o, o, g, g, Z, Z, ],
    [ Z, Z, Z, g, o, o, o, o, o, o, o, o, g, Z, Z, Z, ],
    [ Z, Z, Z, g, g, o, o, o, o, o, o, g, g, Z, Z, Z, ],
    [ Z, Z, Z, Z, g, m, g, o, o, o, g, g, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, g, g, m, m, g, g, m, g, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, g, g, m, g, m, m, g, g, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, g, g, Z, g, m, o, g, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, Z, Z, Z, g, o, o, g, Z, Z, Z, Z, ],
    [ Z, Z, Z, Z, Z, Z, Z, Z, g, g, g, Z, Z, Z, Z, Z, ],
  ]))
  images.add('LandCorner', new Image([
    [ r, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, r, e, e, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, r, e, e, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ r, e, e, b, b, b, b, b, b, b, b, e, b, b, b, b, ],
    [ r, e, e, e, b, b, b, b, b, b, b, e, b, e, b, b, ],
    [ r, e, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ r, e, e, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, r, e, e, b, b, b, e, b, b, b, b, b, b, b, b, ],
    [ b, r, e, e, e, b, b, b, b, b, b, b, b, b, b, b, ],
    [ r, e, e, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ r, e, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ r, e, e, b, b, b, b, b, e, b, b, b, b, e, b, b, ],
    [ r, e, e, e, b, e, b, e, e, e, b, e, b, e, e, b, ],
    [ b, r, e, e, e, e, e, e, e, e, b, e, e, e, e, b, ],
    [ b, b, r, e, e, e, e, r, r, e, e, e, e, r, r, e, ],
    [ b, b, b, r, r, r, r, b, b, r, r, r, r, b, b, r, ],
  ]))
  images.add('LandBottom', new Image([
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, e, b, e, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, e, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, e, b, e, b, e, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, e, b, b, b, b, e, b, b, ],
    [ b, e, e, b, e, b, b, e, e, e, b, e, b, e, e, b, ],
    [ b, e, e, e, e, b, e, e, e, e, b, e, e, e, e, b, ],
    [ e, r, r, e, e, e, e, r, r, e, e, e, e, r, r, e, ],
    [ r, b, b, r, r, r, r, b, b, r, r, r, r, b, b, r, ],
  ]))
  images.add('ArrowLeftDisabled', new Image([
    [ a, s, s, s, s, s, s, s, s, s, s, s, s, s, s, a, ],
    [ s, t, t, a, a, a, a, a, a, a, a, a, a, t, t, s, ],
    [ s, t, t, t, t, t, t, t, t, t, t, t, t, t, a, s, ],
    [ s, t, t, t, a, a, a, s, s, s, s, a, t, a, a, s, ],
    [ s, t, t, t, a, s, s, a, a, a, s, a, t, a, a, s, ],
    [ s, t, t, t, s, a, a, a, a, s, a, a, t, a, a, s, ],
    [ s, t, t, t, s, t, t, t, t, s, a, a, t, a, a, s, ],
    [ s, t, t, t, t, s, s, t, t, t, s, a, t, a, a, s, ],
    [ s, t, t, t, a, t, t, s, s, s, s, a, t, a, a, s, ],
    [ s, t, t, t, a, a, a, t, t, t, t, a, t, a, a, s, ],
    [ s, t, t, t, a, a, a, a, a, a, a, a, t, a, a, s, ],
    [ s, t, t, t, t, t, t, t, t, t, t, t, t, a, a, s, ],
    [ s, t, t, a, a, a, a, a, a, a, a, a, a, t, a, s, ],
    [ s, t, a, t, t, a, t, t, t, t, a, t, t, a, t, s, ],
    [ s, a, t, a, t, t, t, a, a, t, t, t, a, t, a, s, ],
    [ a, s, s, s, s, s, s, s, s, s, s, s, s, s, s, a, ],
  ]))
  images.add('Wall', new Image([
    [ b, b, b, b, b, b, c, c, c, c, b, b, b, b, b, b, ],
    [ b, a, a, a, a, b, b, c, c, a, a, a, a, b, b, b, ],
    [ a, a, a, a, a, a, b, c, a, a, a, a, a, a, a, a, ],
    [ a, a, a, c, c, a, a, c, a, a, a, a, a, a, c, a, ],
    [ a, a, a, a, a, a, a, c, c, a, a, c, c, a, a, a, ],
    [ a, a, c, a, a, a, c, c, c, c, a, a, a, a, a, a, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, b, b, b, b, b, b, b, b, b, b, b, b, c, c, ],
    [ c, a, a, a, a, a, a, a, b, b, b, a, b, b, b, c, ],
    [ c, a, a, a, b, a, a, a, a, a, a, a, a, b, b, c, ],
    [ c, a, a, a, a, a, a, a, a, a, a, c, a, a, b, c, ],
    [ c, a, a, a, a, c, c, a, a, a, a, a, a, a, b, c, ],
    [ c, c, a, a, a, a, a, a, c, c, a, a, a, a, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ],
  ]))
  images.add('WallVert', new Image([
    [ b, b, b, b, c, c, c, c, c, c, b, a, a, b, c, c, ],
    [ a, b, b, b, b, c, c, c, c, b, a, a, a, a, c, c, ],
    [ a, a, a, a, b, b, c, c, a, a, a, a, a, c, c, c, ],
    [ a, a, a, a, a, b, c, c, a, a, c, a, c, c, c, c, ],
    [ a, a, c, c, a, a, c, c, a, a, a, c, c, b, c, c, ],
    [ a, a, a, a, a, c, c, c, a, a, c, c, c, b, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, b, b, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, b, b, b, c, c, ],
    [ c, c, b, b, b, b, b, b, c, c, c, b, a, b, c, c, ],
    [ c, c, a, a, a, a, a, a, b, c, c, a, a, a, c, c, ],
    [ c, a, c, a, a, a, b, a, a, b, c, a, a, a, c, c, ],
    [ c, a, a, a, c, c, a, a, a, a, c, a, a, c, c, c, ],
    [ c, a, a, a, a, a, a, a, c, a, c, c, c, c, c, c, ],
    [ c, a, a, a, a, a, a, a, a, c, c, c, c, b, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, c, b, b, c, c, ],
    [ c, c, c, c, c, c, c, c, c, c, c, b, b, b, c, c, ],
  ]))
  images.add('PlayerPushingDown', new Image([
    [ Z, Z, Z, Z, Z, Z, Z, g, Z, Z, Z, Z, Z, Z, Z, Z, ],
    [ Z, g, g, Z, Z, Z, g, m, g, Z, Z, Z, g, g, Z, Z, ],
    [ Z, g, m, g, Z, Z, g, m, g, Z, Z, g, m, g, Z, Z, ],
    [ Z, Z, g, m, g, g, g, g, g, g, g, m, m, g, Z, Z, ],
    [ Z, Z, Z, g, g, g, g, g, g, g, g, g, g, g, g, Z, ],
    [ Z, Z, g, g, g, o, g, g, g, g, m, g, g, g, g, Z, ],
    [ Z, g, g, g, g, g, g, o, m, g, g, g, g, g, Z, Z, ],
    [ Z, g, g, g, g, g, g, o, m, g, g, g, g, Z, Z, Z, ],
    [ Z, g, g, m, g, g, g, g, g, g, g, g, m, g, Z, Z, ],
    [ Z, Z, g, m, g, g, g, g, g, g, g, g, m, g, Z, Z, ],
    [ Z, Z, g, g, g, m, g, o, o, g, m, g, g, g, Z, Z, ],
    [ Z, g, g, o, g, o, o, o, o, o, o, g, o, g, g, Z, ],
    [ Z, g, m, m, g, g, o, o, o, o, g, g, m, m, g, Z, ],
    [ Z, g, o, o, g, g, g, g, g, g, g, g, o, o, g, Z, ],
    [ Z, g, o, o, o, g, g, g, g, g, g, o, o, o, g, Z, ],
    [ Z, Z, g, g, g, g, Z, Z, Z, Z, g, g, g, g, Z, Z, ],
  ]))
  images.add('Water0', new Image([
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
  ]))
  images.add('Water1', new Image([
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, u, p, u, u, p, p, p, u, u, u, u, p, u, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
  ]))
  images.add('Water2', new Image([
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, u, u, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, u, u, u, u, u, u, u, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, u, u, u, p, p, ],
    [ p, p, p, p, p, p, p, p, p, u, u, u, u, u, u, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
  ]))
  images.add('Water3', new Image([
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, u, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, u, u, u, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, u, u, p, u, u, p, p, p, p, p, p, p, p, p, ],
    [ u, u, p, p, p, p, u, u, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, u, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, u, u, u, u, p, p, p, ],
    [ p, p, p, p, p, p, p, u, u, u, u, p, u, u, p, p, ],
    [ p, p, p, p, p, u, u, u, p, p, p, p, p, u, u, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
  ]))
  images.add('Water4', new Image([
    [ p, p, p, p, p, p, u, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, u, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, u, u, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, u, u, p, u, u, p, p, p, p, p, p, p, p, p, ],
    [ p, u, u, p, p, p, p, u, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, u, p, u, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, u, p, u, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, u, u, u, p, p, p, ],
    [ p, p, p, p, p, p, p, p, u, u, p, p, u, u, p, p, ],
    [ p, p, p, p, p, p, u, u, u, p, p, p, p, p, u, p, ],
    [ p, p, p, p, u, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
    [ p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ],
  ]))
  images.add('TreeTop', new Image([
    [ b, b, b, b, b, c, c, c, b, b, c, c, c, b, b, b, ],
    [ b, b, b, c, c, c, a, a, c, c, a, a, a, c, b, b, ],
    [ b, b, c, c, a, a, c, a, a, a, c, c, a, a, c, b, ],
    [ b, b, c, a, a, c, a, a, c, a, a, c, c, c, a, c, ],
    [ b, c, c, a, c, c, a, a, c, c, a, a, c, c, c, c, ],
    [ b, c, c, a, c, a, a, c, a, c, c, c, a, c, b, c, ],
    [ b, c, c, c, c, a, a, c, c, a, c, c, c, c, b, b, ],
    [ b, c, c, c, c, c, a, c, c, a, a, c, c, c, c, b, ],
    [ b, c, c, b, c, c, c, c, c, c, a, c, b, c, c, b, ],
    [ b, c, c, b, c, c, c, c, c, c, c, c, b, b, c, b, ],
    [ b, b, c, b, c, c, c, c, c, c, c, c, c, b, b, b, ],
    [ b, b, b, b, c, c, c, c, e, c, b, c, c, c, b, b, ],
    [ b, b, b, b, c, b, c, e, c, c, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, c, c, b, c, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, c, c, c, c, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, c, c, b, c, b, b, b, b, b, b, ],
  ]))
  images.add('PlayerStoppedDown', new Image([
    [ Z, Z, Z, Z, Z, g, g, g, g, g, g, g, g, Z, Z, Z, ],
    [ Z, Z, g, g, g, g, g, o, m, g, g, g, Z, Z, Z, Z, ],
    [ Z, g, g, g, g, o, g, o, m, g, m, g, g, g, Z, Z, ],
    [ Z, Z, g, g, g, g, g, g, g, g, g, g, g, g, Z, Z, ],
    [ Z, g, g, g, g, g, g, o, o, g, g, g, g, g, g, Z, ],
    [ g, g, g, m, g, m, m, o, o, m, m, g, m, g, g, Z, ],
    [ Z, g, g, m, g, m, g, o, o, g, m, g, m, g, g, g, ],
    [ g, g, g, g, g, o, o, o, o, o, o, g, g, u, o, g, ],
    [ g, g, o, o, o, g, o, o, o, o, g, g, o, u, o, g, ],
    [ g, m, o, o, g, o, g, g, g, g, g, o, o, o, g, Z, ],
    [ g, o, m, g, g, o, o, o, o, o, o, g, g, g, Z, Z, ],
    [ g, o, o, g, g, u, o, o, o, o, u, g, Z, Z, Z, Z, ],
    [ Z, g, g, g, m, g, m, m, m, m, g, m, g, Z, Z, Z, ],
    [ Z, Z, g, o, g, m, g, m, g, m, g, g, g, Z, Z, Z, ],
    [ Z, Z, g, o, o, g, g, g, g, g, o, o, o, g, Z, Z, ],
    [ Z, Z, g, g, g, Z, Z, Z, Z, Z, g, g, g, Z, Z, Z, ],
  ]))
  images.add('TreeBottom', new Image([
    [ b, b, b, b, b, b, c, e, c, c, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, c, c, c, b, c, b, b, b, b, b, ],
    [ b, b, b, b, b, b, c, e, e, b, c, b, b, c, b, b, ],
    [ b, b, b, b, b, b, c, e, c, c, c, b, c, c, b, b, ],
    [ b, b, c, b, b, b, c, c, c, c, b, c, c, b, c, b, ],
    [ b, c, c, b, c, b, c, e, e, e, b, c, a, c, c, b, ],
    [ b, c, b, c, b, c, e, e, e, c, c, c, a, c, b, c, ],
    [ c, a, a, a, b, c, c, c, c, c, c, b, c, a, c, b, ],
    [ c, a, c, a, c, c, a, c, e, c, e, c, b, c, c, b, ],
    [ b, c, a, c, c, a, a, c, c, e, c, c, c, a, c, c, ],
    [ c, a, a, c, c, a, c, a, c, c, c, e, c, c, a, c, ],
    [ b, c, c, c, c, c, a, c, c, c, c, c, c, a, a, c, ],
    [ b, b, c, c, a, c, c, c, c, c, c, c, a, c, c, b, ],
    [ b, b, b, a, a, b, c, c, a, a, a, a, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, a, a, b, b, b, b, b, b, ],
    [ b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, ],
  ]))

  return images
}
