const logger = (message = "", data = null) => {
  console.log(`${new Date().toISOString()} - ${message}`, data ? data : "");
};

module.exports = logger;
