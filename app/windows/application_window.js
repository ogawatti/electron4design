const path = require('path');

module.exports = class ApplicationWindow {
  get defaultWindowOptions() { return  { width: 800, height: 600 } }
  get name() { return this.constructor.name.split("Window")[0].toLowerCase() }
  get viewPath() { return path.join(__dirname, "../views", `${this.name}.html`) }

  constructor(browserWindow) {
    this.browserWindow = browserWindow
  }

  open(options) {
    let opts = options ? options : this.defaultWindowOptions

    this.win = new this.browserWindow(opts)
    this.win.loadFile(this.viewPath)
    this.win.on('closed', () => { this.closed() })
  }

  closed() { this.win = null }
}
