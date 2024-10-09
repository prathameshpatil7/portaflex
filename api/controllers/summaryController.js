const summaryService = require("../services/summaryService");
const logger = require("../utils/logger");

// Get summary
const getSummary = async (req, res) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const summary = await summaryService.getSummary(userId);
    res.status(200).json(summary);
  } catch (error) {
    logger("Error fetching summary", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

const updateSummary = async (req, res) => {
  const { content } = req.body;
  const userId = req.user._id; // Get userId from the decoded token

  try {
    const updatedSummary = await summaryService.updateSummary(content, userId);
    res.status(200).json(updatedSummary);
  } catch (error) {
    logger("Error updating summary", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

module.exports = {
  getSummary,
  updateSummary,
};
