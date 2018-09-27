const expect = require('chai').expect
const MainWindow = require('../app/windows/main_window')
const BrowserWindowMock = require('./support/browser_window_mock')

describe('MainWindow', () => {
  beforeEach(() => {
    this.win = new MainWindow(BrowserWindowMock)
  })

  describe('#name', () => {
    it ('return "main"', () => {
      expect(this.win.name).to.equal('main')
    })
  })

  describe('#defaultWindowOptions', () => {
    it ('return map include width and height"', () => {
      let opts = this.win.defaultWindowOptions
      expect(opts['width']).to.be.a('number')
      expect(opts['height']).to.be.a('number')
    })
  })

  describe('#viewPath', () => {
    it ('return "/path/to/app/views/main.html"', () => {
      expect(this.win.viewPath).to.include('app/views/main.html')
    })
  })

  describe('#browserWindow', () => {
    it ('return BrowserWindowMock instance', () => {
      expect(this.win.browserWindow).to.equal(BrowserWindowMock)
    })
  })

  describe('#open()', () => {
    it ('set win', () => {
      this.win.open()
      expect(this.win.win).to.be.an.instanceof(BrowserWindowMock)
    })
  })

  describe('#closed()', () => {
    it ('unset win', () => {
      this.win.closed()
      expect(this.win.win).to.be.null
    })
  })
})
