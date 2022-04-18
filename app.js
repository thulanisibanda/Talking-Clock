//import functions
const { parseTime } = require("./service/TalkingClockService.js");

//call function with user argument
console.log(parseTime(process.argv[2]));
