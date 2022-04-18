const { test, expect } = require("@jest/globals");
const {
  getCurrentTime,
  parseTime,
  timeToText,
} = require("../TalkingClockService");
const mockDate = require("mockdate");

describe("getting the current time", () => {
  //checking getCurrentTime() function with mock time
  test("getting mock time correctly", () => {
    //mock the current date and time to 17/04/2022 23:28
    let date = new Date("2022-04-17T22:28:47.957Z");
    mockDate.set(date);

    //run the test
    expect(getCurrentTime()).toBe("23:28");

    //resetting the date functions
    mockDate.reset();
  });

  //check the format of real time from getCurrentTime()
  test("check real time format", () => {
    const time = getCurrentTime();
    expect(/^(2[0-3]|[01]?[0-9]):([0-5][0-9])/.test(time)).toEqual(true);
  });
});

describe("check valid times", () => {
  //valid times to test in format [hh,mm,text]
  const validTimes = [
    ["00", "00", "Twelve o'clock"],
    ["12", "30", "Half past twelve"],
    ["15", "45", "Quarter to four"],
    ["1", "36", "Twenty four to two"],
    ["17", "00", "Five o'clock"],
    ["23", "59", "One to twelve"],
    ["02", "11", "Eleven past two"],
    ["07", "53", "Seven to eight"],
  ];

  //testing valid times to text
  test.each(validTimes)("check times to text", (hour, minute, output) => {
    expect(timeToText({ hour: parseInt(hour), minute: parseInt(minute) })).toBe(
      output
    );
  });
});

describe("checking invalid times", () => {
  //invalid times to test
  const invalidTimes = [
    "2300",
    "25:00",
    "12:60",
    "dggd",
    "hd:56",
    "-12:34",
    "",
    "234:13",
    "1:-15",
    "**:**",
  ];

  //testing invalid times for error
  test.each(invalidTimes)("check parseTime error", (time) => {
    expect(parseTime(time)).toBe(
      "Sorry I didnt understand that. Please use the time format hh:mm"
    );
  });
});
