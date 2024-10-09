const express = require("express");
const router = express.Router();
const achievementController = require("../controllers/achievementController");

const protect = require("../middlewares/userAuth");

// Get all achievements
router.get("/", protect, achievementController.getAchievements);

// Create new achievement
router.post("/create", protect, achievementController.createAchievement);

// Update an achievement
router.put("/:id", protect, achievementController.updateAchievement);

// Delete an achievement
router.delete("/:id", protect, achievementController.deleteAchievement);

module.exports = router;
