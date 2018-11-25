// This is where ipc are processed
const {ipcMain} = require('electron')

function runCommandCenter() {
  ipcMain.on('ping', (event, arg) => {
    console.log('ping')
    event.sender.send('pong', 'pong')
  })
}

module.exports.runCommandCenter = runCommandCenter
