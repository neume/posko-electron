import expect from 'expect.js'
import SignInUseCase from 'lib/useCases/signInUseCase.js'
class SignInRequestMock {
  async post(account_name, email, password, callback){
    callback({ data: { user: { email: 'john@email.com' } } })
  }
}
describe('SignInUseCase', function() {
  describe('#perform', function() {
    it('signs in user', function() {
      let signInUseCase = new SignInUseCase(
        {
          request: new SignInRequestMock()
        }
      )
      let options = { account_name: 'John', password: 'password', email: 'john@email.com' }
      let result
      signInUseCase.perform(options, (response) => {
        result = response.data.user.email
      })

      expect(result).to.equal('john@email.com');
    })
  })
})
