const summaryRepository = require("../repositories/summaryRepository");

// Get summary
const getSummary = async (userId) => {
  return await summaryRepository.get(userId);
};

// Update summary
const updateSummary = async (content, userId) => {
  return await summaryRepository.update(content, userId);
};

module.exports = {
  getSummary,
  updateSummary,
};
