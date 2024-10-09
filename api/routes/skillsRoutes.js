const express = require("express");
const router = express.Router();
const skillsController = require("../controllers/skillsController");
const protect = require("../middlewares/userAuth");

// Get all skills
router.get("/", protect, skillsController.getAllSkills);

// Add a new skill category
router.post("/create", protect, skillsController.addSkillsCategory);

// Update an existing skill category
router.put("/:skillsId", protect, skillsController.updateSkillsCategory);

// Delete a skill category
router.delete("/:skillsId", protect, skillsController.deleteSkillsCategory);

module.exports = router;
