//imports
const express = require("express");

//initialising express
const app = express();

// port number to listen to
const PORT = 8082;

//middlewares
app.use(express.urlencoded({ extended: true }));

//routes
app.use(require("./routes/TalkingClockRoutes"));

//listening to port
app.listen(PORT, () => {
  console.log("listening to number " + PORT);
});
