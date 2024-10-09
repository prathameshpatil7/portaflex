const Summary = require("../models/summaryModel");

// Get summary
const get = async (userId) => {
  return await Summary.findOne({ userId });
};

// Update summary
const update = async (content, userId) => {
  return await Summary.findOneAndUpdate(
    { userId }, // Ensure the summary belongs to the user
    { content },
    { new: true, upsert: true }
  );
};

module.exports = {
  get,
  update,
};
