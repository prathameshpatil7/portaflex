const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
  logger("Error encountered", err.stack); // Log the error details
  res.status(500).json({ message: "Internal Server Error" });
};

module.exports = errorHandler;
