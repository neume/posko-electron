import qs from 'qs';
import axios from 'axios';

export default class SignInRequest {
  constructor(config = {}) {
    let defaults = {
      baseURL: "http://localhost:3001"
    }

    let merged_config = Object.assign(defaults, config)

    this.baseURL = merged_config.baseURL
    axios.defaults.baseURL = this.baseURL
  }

  async post(account_name, email, password) {
    let result = null
    await axios({
      method: 'post',
      url:'/api/v1/sign_in',
      data: qs.stringify({
        email: email,
        password: password,
        account_name: account_name
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(function (response) {
      result = response.data.user
    })
    .catch(function (error) {
      console.log(error)
    })

    return result
  }
}
