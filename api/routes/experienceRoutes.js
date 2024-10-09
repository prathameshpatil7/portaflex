const express = require("express");
const experienceController = require("../controllers/experienceController");
const protect = require("../middlewares/userAuth");

const router = express.Router();

// Get all experiences
router.get("/", protect, experienceController.getAllExperiences);

// Create a new experience
router.post("/create", protect, experienceController.createExperiences);

// Update an existing experience by ID
router.put("/:id", protect, experienceController.updateExperience);

// Delete an experience by ID
router.delete("/:id", protect, experienceController.deleteExperience);

module.exports = router;
