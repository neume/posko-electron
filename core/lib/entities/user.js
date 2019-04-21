
export default class User {
  constructor(options = {}) {
    let { email, first_name, last_name, middle_name, suffix, title, token, status } = options
    this.email = email
    this.first_name = first_name
    this.last_name = last_name
    this.middle_name = middle_name
    this.suffix = suffix
    this.title = title
    this.token = token
    this.status = status
  }
}
