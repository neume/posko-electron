import expect from 'expect.js'
import SignInUseCase from 'lib/useCases/signInUseCase.js'
class SignInRequestMock {
  async post(account_name, email, password){
    return { email: 'john@email.com' }
  }
}
describe('SignInUseCase', function() {
  describe('#perform', function() {
    it('signs in user', function(done) {
      let signInUseCase = new SignInUseCase(
        {
          request: new SignInRequestMock()
        }
      )
      let options = { account_name: 'John', password: 'password', email: 'john@email.com' }
      let result
      signInUseCase.perform(options).then((value) => {
        result = value.user.email
        expect(result).to.equal('john@email.com');
        done()
      })
    })
  })
})
