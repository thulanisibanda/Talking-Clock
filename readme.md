About the project<br>
This is a talking clock service that convert numerical time to a human friendly text. e.g. `16:00` to `Four o'clock`, `3:43` to `Seventeen to four`<br><br>
It is build in nodejs and using npm as the package manager<br>
Packages used are:<br>
express => for API management<br>
winston => for logging errors to file<br>
jest => for testing<br>
mockdate => for mocking the date and time while testing<br>
nodemon => for automatic web server restarts after file changes<br>

Getting started:<br>
Please first install all dependences with `npm install`.

Command line service:<br>
To get the current time in human friendly language use `npm start`<br>
To get a custom time in human friendly language use `npm start time` where `time` is your custom time. e.g. `npm start 23:59` `npm start 1:00`<br><br>

Web server:<br>
Default port to listen to is 8082. To set the port to listen to please change `PORT` in server.js<br>
To run the web server in production use `node server.js`.<br>
To run the web server for development/testing use `nodemon server.js`<br>
Nodemon is a library that will check for changes while developing or testing and restart the server automatically.<br><br>

Testing<br>
The testing library used is jest.<br>
The tests are located in `service\__test__\TalkingClockService.test.js`<br>
To run tests use `npm test`
