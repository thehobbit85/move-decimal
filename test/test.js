const moveDecimal = require('../index.js')
const moveDecimalPoint = require('move-decimal-point')
const jf = require('jsonfile')
const path = require('path')
const expect = require('chai').expect
const ITERATIONS = parseInt(process.env.ITERATIONS, 10) || 1
const fixtures = jf.readFileSync(path.join(__dirname, './fixtures.json'))

let test = function (params, func, msg) {
  console.time(msg)
  Array(ITERATIONS).fill(0).forEach(function (a, i) {
    params.forEach(function (param, index) {
      expect(func(param[0], param[1])).to.equal(param[2])
    })
  })
  console.timeEnd(msg)
}

describe('Move decimal', function () {
  this.timeout(0)

  it('should return correct values for positive n', function (done) {
    test(fixtures.positive, moveDecimal, 'Testing time for this version with positive n')
    test(fixtures.positive, moveDecimalPoint, 'Testing time for move-decimal-point with positive n')
    done()
  })

  it('should return correct values for negative n', function (done) {
    test(fixtures.negative, moveDecimal, 'Testing time for this version with negative n')
    test(fixtures.negative, moveDecimalPoint, 'Testing time for move-decimal-point with negative n')
    done()
  })
})
