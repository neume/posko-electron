class CurrentUser {
  constructor(email, token, secret) {
    this.email = email
    this.token = token
    this.secret = secret
  }


  attributes() {
    return {
      email: this.email,
      token: this.token,
      secret: this.secret
    }
  }

  log() {
    console.log(attributes)
  }
}
module.exports.CurrentUser = constructor
