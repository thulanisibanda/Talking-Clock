About the project
This is a talking clock service that convert numerical time to a human friendly text. e.g. `16:00` to `Four o'clock`, `3:43` to `Seventeen to four`
It is build in nodejs and using npm as the package manager

Getting started:
Please first install all dependances with `npm install`.

Command line service:
To get the current time in human friendly language use `npm start`
To get a custom time in human friendly language use `npm start time` where `time` is your custom time. e.g. `npm start 23:59` `npm start 1:00`

Web server
To run the web server in production or testing use `node server.js`.
For development a libray called nodemon is used to track changes and restart the server automatically when required.
To run the web server for development use `nodemon server.js`

Testing
The testing libray used is jest.
The tests are located in `service\__test__\TalkingClockService.test.js`
To run tests use `npm test`
