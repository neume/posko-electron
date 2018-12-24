const jQuery = require('jquery')
const {ipcRenderer} = require('electron')

window.$ = window.jQuery = require('jquery');

function getDataFrom(id) {
  return $(id).val();
}

$('#sign-in-form').on('submit', function(e) {
  e.preventDefault();

  credentials = {
    account_name: getDataFrom('#sign_in_form_account_name'),
    email: getDataFrom('#sign_in_form_email'),
    password: getDataFrom('#sign_in_form_password')
  }

  ipcRenderer.send('submitSignInForm', credentials);
});
