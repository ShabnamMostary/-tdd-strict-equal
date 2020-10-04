var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var equal = require('../strictEqual')


describe('strictEqualTest', () => {
  it('returns true if both inputs are equal', () => {
    // setup test data
    var input1 = 5
    var input2 = 5
    // call the function with the test data
    var result = equal(input1, input2)

    // asserts what should be true
    expect(result).to.be.true
  })
  it('return false if both inputs are different', () => {
    var input1 = 6
    var input2 = 'a'
    var result = equal(input1, input2)

    expect(result).to.be.false
  })
  it('return false when values are different', () => {
    var input1 = 6
    var input2 = 8
    var result = equal(input1, input2)

    expect(result).to.be.false
  })
  it('return false when types are different', () => {
    var input1 = 6
    var input2 = '6'
    var result = equal(input1, input2)

    expect(result).to.be.false
  })
  it('return false for positive & negative values', () => {
    var input1 = 10
    var input2 = -10
    var result = equal(input1, input2)

    expect(result).to.be.false
  })
})
