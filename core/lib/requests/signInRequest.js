import axios from 'axios'
import qs from 'qs';

export default class SignInRequest {
  constructor(options = {}) {
    this.baseURL =  options.baseURL
    axios.defaults.baseURL = this.baseURL
  }

  async post(account, email, password, callback) {
    let user = null
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
      callback(response)
      user = response.data
    })
    .catch(function (error) {
      console.log(error)
    });
    return user
  }
}
