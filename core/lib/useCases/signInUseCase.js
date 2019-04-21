import SignInRequest from '../requests/signInRequest'
export default class SignInUseCase {
  constructor(options = {
    request: new SignInRequest({baseURL: 'http://localhost:3001'})
  }) {
    this.request = options.request
  }
  async perform(options = {}, callback) {
    let { account_name, email, password } = options,
        result = false
    let user = null

    user = await this.request.post(account_name, email, password, callback)
    return { result: result, user: user }
  }
}
