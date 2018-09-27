module.exports = class BrowserWindowMock {
  constructor(options) {
    this.options = options
  }

  loadFile(path) { return path }
  on(eventName, callback) { return true }
}
