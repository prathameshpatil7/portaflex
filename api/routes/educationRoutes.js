const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");
const protect = require("../middlewares/userAuth");

// Get all education entries
router.get("/", protect, educationController.getAllEducation);

// Create a new education entry
router.post("/create", protect, educationController.createEducation);

// Update an education entry by ID
router.put("/:id", protect, educationController.updateEducation);

// Delete an education entry by ID
router.delete("/:id", protect, educationController.deleteEducation);

module.exports = router;
