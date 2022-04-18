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

//Handle not found error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//Handle all other errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
  next(error);
});

//listening to port
app.listen(PORT, () => {
  console.log("listening to number " + PORT);
});
