const router = require("express").Router();
const { parseTime } = require("../service/TalkingClockService.js");

//Home page
router.get("/", (req, res) => {
  //call parseTime() with no arguemnt to get the current time
  response = parseTime();
  //return current time to user as JSON
  res.send({ response });
});

//Getting custom time
router.get("/:timeVar", (req, res) => {
  //call parseTime with user argument to get custom time
  response = parseTime(req.params.timeVar);

  //check response for error
  if (response.startsWith("Sorry")) {
    //return error status and message to user
    res.status(400).send({ response });
  } else {
    //return response as JSON object
    res.send({ response });
  }
});

module.exports = router;
