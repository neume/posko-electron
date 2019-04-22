import expect from 'expect.js'
import User from 'lib/domain/entities/user.js'
describe('User', function() {
  describe('name', function() {
    it('have #first_name', function() {
      let user = new User({ first_name: 'John'})
      expect(user.first_name).to.equal('John');
    })
  })
})
