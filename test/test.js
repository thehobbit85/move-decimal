const moveDecimal = require('../index.js')
const moveDecimalPoint = require('move-decimal-point')
const jf = require('jsonfile')
const path = require('path')
const expect = require('chai').expect
const ITERATIONS = parseInt(process.env.ITERATIONS, 10) || 1
const mode = process.env.npm_lifecycle_event
const fixturesFileName = mode === 'benchmark' ? 'fixturesBenchmark.json' : 'fixtures.json'
const fixtures = jf.readFileSync(path.join(__dirname, fixturesFileName))
const benchmark = (mode === 'benchmark')

let test = function (params, func, msg) {
  benchmark && console.time(msg)
  Array(ITERATIONS).fill(0).forEach(function (a, i) {
    params.forEach(function (param, index) {
      expect(func(param[0], param[1])).to.equal(param[2])
    })
  })
  benchmark && console.timeEnd(msg)
}

describe('Move decimal', function () {
  this.timeout(0)

  it('should return correct values for positive n', function (done) {
    benchmark && test(fixtures.positive, moveDecimalPoint, 'Testing time for move-decimal-point with positive n')
    test(fixtures.positive, moveDecimal, 'Testing time for this version with positive n')
    done()
  })

  it('should return correct values for negative n', function (done) {
    benchmark && test(fixtures.negative, moveDecimalPoint, 'Testing time for move-decimal-point with negative n')
    test(fixtures.negative, moveDecimal, 'Testing time for this version with negative n')
    done()
  })
})
