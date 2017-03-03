module.exports = (n, p) => {
  let i, r, l, s, len
  s = n[0] === '-' ? (n = n.replace('-', '')) && '-' : ''
  len = n.length
  i = n.indexOf('.')
  i = ~i ? i : len
  l = n.slice(0, i)
  r = n.slice(i + 1, len) || '0'
  i = 0
  if (p > 0) {
    len = r.length
    let { z, m } = { z: p - len, m: p - len > 0 ? len : p }
    l += r.slice(0, z > 0 ? len : p)
    let lenl = l.length - 1
    while (l[i] === '0' && i < lenl) i++
    l = s + l.substr(i)
    if (z < 0) return l + '.' + r.slice(m, len)
    else if (z > 0) for (i = 0; i < z; i++) l = l + '0'
    return l
  } if (p < 0) {
    p *= -1
    len = l.length
    let { z, m } = { z: p - len, m: p - len > 0 ? len : p }
    r = l.slice(len - m, len) + r
    l = s + l.slice(0, len - m)
    let lenr = r.length - 1
    while (r[lenr - i] === '0') i++
    if (i) r = r.slice(0, -1 * i)
    if (z < 0) return r.length === 0 ? l : l + '.' + r
    else if (z > 0) for (i = 0; i < z; i++) r = '0' + r
    return s + '0.' + r
  }
  return s + n
}
