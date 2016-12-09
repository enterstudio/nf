const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
  let win

  win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true,
  }))

  win.setMenu(null)

  win.on('closed', () => {
    win = null
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
