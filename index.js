const electron = require('electron')
const {app, BrowserWindow} = electron
let win;

app.on('ready', function(){
  win = new BrowserWindow({});
  win.loadFile('views/index.html')

  win.on('closed', function () {
    win = null
  })
})
