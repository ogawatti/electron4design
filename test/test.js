const Application = require('spectron').Application
const expect = require('chai').expect
const electronPath = require('electron')
const path = require('path')

describe('Application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, '../')]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', async function () {
    let count = await this.app.client.getWindowCount()
    expect(count).to.equal(1)
  })
})
