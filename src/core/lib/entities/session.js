
export default class Session {
  constructor(options = {}) {
    let { created_at } = options
    this.created_at = created_at
  }
}
