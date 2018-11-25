const electron = require('electron')
const {app, BrowserWindow} = electron
const {runCommandCenter} = require('./command-center')

let win;

app.on('ready', function(){
  win = new BrowserWindow({});
  win.loadFile('renderers/index.html')
  win.on('closed', function () {
    win = null
  })
  runCommandCenter();
  win.webContents.openDevTools()
})
