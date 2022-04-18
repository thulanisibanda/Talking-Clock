const logger = require("../logs/logger");

//array to hold minute strings
const minuteArray = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine",
  "thirty",
];

//array for hour strings
const hourArray = [
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

// get current time in hh:mm format
const getCurrentTime = () => {
  //get current datetime
  today = new Date();
  //get hour from datetime
  hour = today.getHours();
  //get minute from datetime
  minute = today.getMinutes();
  //ensure minute is 2 digits e.g 03,07,08
  if (minute < 10) {
    minute = String(minute).padStart(2, "0");
  }
  //return time in hh:mm format
  return `${hour}:${minute}`;
};

//main function to parse time from hh:mm to english and error handling
const parseTime = (timeVar) => {
  const formatError =
    "Sorry I didnt understand that. Please use the time format hh:mm";
  try {
    //check if user passed a time argument
    if (typeof timeVar === "undefined") {
      //set current time
      timeVar = getCurrentTime();
    }
    //check if timeVar is correct format
    let isCorrectFormat = /^(2[0-3]|[01]?[0-9]):([0-5][0-9])/.test(timeVar);

    //if format is correct continue other return error
    if (isCorrectFormat) {
      //seperate hour and minute
      timeArray = timeVar.split(":");
      hour = parseInt(timeArray[0]);
      minute = parseInt(timeArray[1]);

      //check if time is valid
      //convert time to english
      response = timeToText({ hour, minute });
    } else {
      //if time is not valid set error message
      response = formatError;
    }
    //check to make sure no undefined variables
    if (response.includes("undefined")) {
      throw new Error(`contains undefined`);
    }
    //return response
    return response;
  } catch (e) {
    logger.log({
      level: "error",
      message: `Error: Exception. Input: ${timeVar}, Output: ${response}, Exception: ${e.message}`,
    });
    return formatError;
  }
};

// change time hh:mm format to english
const timeToText = ({ hour, minute }) => {
  //set response variable
  let response;

  //proccess logic
  if (minute === 0) {
    response = hourArray[hour] + " o'clock";
  } else if (minute === 15) {
    response = "quarter past " + hourArray[hour];
  } else if (minute === 30) {
    response = "half past " + hourArray[hour];
  } else if (minute === 45) {
    response = "quarter to " + hourArray[hour + 1];
  } else if (minute < 30) {
    response = minuteArray[minute] + " past " + hourArray[hour];
  } else if (minute > 30) {
    response = minuteArray[60 - minute] + " to " + hourArray[hour + 1];
  }

  //return result from logic with first letter capitalised
  return response.charAt(0).toUpperCase() + response.slice(1);
};

module.exports = { getCurrentTime, parseTime, timeToText };
