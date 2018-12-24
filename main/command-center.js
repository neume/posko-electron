// This is where ipc are processed
const {ipcMain} = require('electron')
const axios = require('axios');
const CurrentUser = require('./models/current_user');
let host = 'http://localhost:3000'

this.currentUser = null
function runCommandCenter() {
  ipcMain.on('submitSignInForm', (event, arg) => {
    axios({
      url: host + '/api/v1/sign_in',
      method: 'post',
      data: {
        email: arg.email,
        password: arg.password,
        account_name: arg.account_name
      }
    })
    .then(function (response) {
      user = response.data
      console.log(user);
    })
    .catch(function (error) {
      console.log(error);
    });
  })
}

module.exports.runCommandCenter = runCommandCenter
