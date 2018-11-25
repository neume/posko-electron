
const {ipcRenderer} = require('electron')

credentials = {
  account_name: 'first_company',
  email: 'admin@first_company.com',
  password: 'pass'
}

ipcRenderer.sendSync('ping', credentials)

ipcRenderer.on('pong', (event, arg) => {
  console.log('pong')
})
