module.exports = (num, n) => {
  let i, r, l
  for (i = 0; i < num.length; i++) if (num[i] === '.') break
  if (i < num.length) {
    l = num.slice(0, i) || '0'
    r = num.slice(i + 1, num.length) || '0'
  } else {
    l = num || '0'
    r = '0'
  }
  i = 0
  if (n > 0) {
    let { zeroes, move } = { zeroes: n - r.length, move: n - r.length > 0 ? r.length : n }
    l += r.slice(0, zeroes > 0 ? r.length : n)
    while (l[i] === '0' && i < l.length - 1) i++
    l = l.substr(i)
    if (zeroes < 0) return l + '.' + r.slice(move, r.length)
    else if (zeroes > 0) for (i = 0; i < zeroes; i++) l = l + '0'
    return l
  } else if (n < 0) {
    n *= -1
    let { zeroes, move } = { zeroes: n - l.length, move: n - l.length > 0 ? l.length : n }
    r = l.slice(l.length - move, l.length) + r
    l = l.slice(0, l.length - move)
    while (r[r.length - (i + 1)] === '0') i++
    if (i) r = r.slice(0, -1 * i)
    if (zeroes < 0) return r.length === 0 ? l : l + '.' + r
    else if (zeroes > 0) for (i = 0; i < zeroes; i++) r = '0' + r
    return '0.' + r
  }
  return num
}
