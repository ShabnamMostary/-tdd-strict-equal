function strictEqual(a, b) {
  // eslint-disable-next-line eqeqeq
  return ((a == b) && (typeof a == typeof b))
}
module.exports = strictEqual
