const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "Talking-Clock-Service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    //
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});

module.exports = logger;
