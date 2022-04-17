About the project
This is a talking clock service that convert numerical time to a human friendly text. e.g. `16:00` to `Four o'clock`, `3:43` to `Seventeen to four`
It is build in nodejs and using npm as the package manager
Packages used are:
express => for API management
winton => for logging errors to file
jest => for testing
mockdate => for mocking the date and time while testing
nodemon => for automatic web server restarts after file changes

Getting started:
Please first install all dependances with `npm install`.

Command line service:
To get the current time in human friendly language use `npm start`
To get a custom time in human friendly language use `npm start time` where `time` is your custom time. e.g. `npm start 23:59` `npm start 1:00`

Web server
Default port to listen to is 8082. To set the port to listen to please chnage `PORT` in server.js
To run the web server in production use `node server.js`.
To run the web server for development/testing use `nodemon server.js`
Nodemon is a library that will check for changes while developing or testing and restart the server automatically.

Testing
The testing libray used is jest.
The tests are located in `service\__test__\TalkingClockService.test.js`
To run tests use `npm test`
