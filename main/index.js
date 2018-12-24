const electron = require('electron')
const {app, BrowserWindow} = electron
const {runCommandCenter} = require('./command-center')
const axios = require('axios')

let win

app.on('ready', function(){
  win = new BrowserWindow({})
  win.loadFile('renderers/index.html')
  win.on('closed', function () {
    win = null
  })
  runCommandCenter()

  console.log('Running Command Center')
  win.webContents.openDevTools()
})
