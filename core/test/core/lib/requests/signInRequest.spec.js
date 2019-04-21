import expect from 'expect.js'
import SignInRequest from 'lib/requests/signInRequest.js'
import axios  from 'axios'
import MockAdapter from 'axios-mock-adapter'

// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios);

mock.onPost('http://localhost:3001/api/v1/sign_in').reply(200, {
  user: { email: 'john@email.com' }
});

describe('SignInRequest', function() {
  describe('#post', function() {
    it('sends a post request', function(done) {
      let request = new SignInRequest(),
          result = null

      request.post('', '', '').then((value) => {
        result = value.email

        expect(result).to.equal('john@email.com');
        done()
      })
    })
  })
})
