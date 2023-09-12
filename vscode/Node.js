const { app, BrowserWindow } = require('electron')
const path = require('path')

 function onSignIn(googleUser) {

 app.signIn = function() {
  // Get `GoogleAuth` instance
  var auth2 = gapi.auth2.getAuthInstance();

  // Sign-In
  auth2.signIn()
  .then(authenticateWithServer)
  .then(changeProfile, function(error) {
    app.fire('show-toast', {
      text: 'Authentication failed.'
    });
  });
};

/**
 * Trigger sign-out using Google Sign-In
 */
app.signOut = function() {
  // Get `GoogleAuth` instance
  var auth2 = gapi.auth2.getAuthInstance();

  // Sign-Out
  fetch('/signout', {
    method: 'POST',
    credentials: 'include'
  }).then(function(resp) {
    if (resp.status === 200) {
      auth2.signOut()
      .then(changeProfile);
    } else {
      throw "Couldn't sign out";
    }
  }).catch(function(error) {
    app.fire('show-toast', {
      text: error
    });
  });
};
