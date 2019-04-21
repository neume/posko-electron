import SignInRequest from '../requests/signInRequest'
export default class SignInUseCase {
  constructor( config = {}) {
    let defaults = {
      request: new SignInRequest({baseURL: 'http://localhost:3001'})
    }

    let merged_config = Object.assign(defaults, config)

    this.request = merged_config.request
  }
  async perform(options = {}, callback) {
    let { account_name, email, password } = options,
        result = false
    let user = null

    user = await this.request.post(account_name, email, password, callback)
    return { result: result, user: user }
  }
}
