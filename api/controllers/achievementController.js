const achievementService = require("../services/achievementService");
const logger = require("../utils/logger");

// Get all achievements
exports.getAchievements = async (req, res) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const achievements = await achievementService.getAchievements(userId);
    res.json(achievements);
  } catch (error) {
    logger("Error fetching achievements:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Create new achievement
exports.createAchievement = async (req, res) => {
  const { title, date, links, bulletPoints } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const newAchievement = await achievementService.createAchievement(
      title,
      date,
      links,
      bulletPoints,
      userId
    );
    res.status(201).json(newAchievement);
  } catch (error) {
    logger("Error creating achievement:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Update an achievement
exports.updateAchievement = async (req, res) => {
  const { id } = req.params;
  const { title, date, links, bulletPoints } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const updatedAchievement = await achievementService.updateAchievement(
      id,
      title,
      date,
      links,
      bulletPoints,
      userId
    );
    res.json(updatedAchievement);
  } catch (error) {
    logger("Error updating achievement:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Delete an achievement
exports.deleteAchievement = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    await achievementService.deleteAchievement(id, userId);
    res.status(202).send();
  } catch (error) {
    logger("Error deleting achievement:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
