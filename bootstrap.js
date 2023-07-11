const concurrently = require('concurrently');

const { result } = concurrently(
  ['nodemon ./server.js --ext js,ejs', 'webpack --watch'],
  {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 3,
  }
)
function success() {
  // This code is necessary to make sure the parent terminates
  // when the application is closed successfully.
  process.exit();
}
function failure() {
  // This code is necessary to make sure the parent terminates
  // when the application is closed because of a failure.
  process.exit();
}
result.then(success, failure)