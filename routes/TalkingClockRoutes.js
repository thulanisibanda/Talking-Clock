const router = require("express").Router();
const { parseTime } = require("../service/TalkingClockService.js");

//Home page
//http://localhost:8082/
router.get("/", (req, res) => {
  response = parseTime();
  res.send({ response });
});

//http://localhost:8082/17:00
router.get("/:timeVar", (req, res) => {
  response = parseTime(req.params.timeVar);
  if (response.startsWith("Sorry")) {
    res.status(400).send({ response });
  } else {
    res.send({ response });
  }
});

module.exports = router;
