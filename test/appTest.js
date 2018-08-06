const { assert } = require('chai')
const { sayHello, addNumbers } = require('../app')


describe('App', () => {
  describe('sayHello', () => {
    it('should return hello', () => {
        let result = sayHello()
        assert.equal(result, 'hello')
    })
    it('should return type string', () => {
        let result = sayHello()
        assert.typeOf(result, 'string')
    })
  })
    describe('addNumbers', () => {
        it('should add numbers', () => {
            let result = addNumbers(2, 3)
            assert.equal(result, 5)
        })
        it('should return type number', () => {
            let result = addNumbers(2,4)
            assert.typeOf(result, 'number')
        })
    })
})