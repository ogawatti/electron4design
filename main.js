const {app, BrowserWindow} = require('electron')
const MainWindow = require('./app/windows/main_window')

class BrowserWindowMock {
  constructor(options) {
    this.options = options
  }

  loadFile(path) { return path }
  on(eventName, callback) {
    switch (eventName) {
      case 'hoge':
        callback('hogehoge')
        break
      default:
        callback()
        break
    }
  }
}

class WattiApp {
  constructor() {
    this.mainWindow = new MainWindow(BrowserWindow)
    app.on('ready', () => { this.mainWindow.open() })
    app.on('window-all-closed', () => { app.quit() })
  }
}

wattiApp = new WattiApp()
