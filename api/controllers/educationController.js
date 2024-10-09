const educationService = require("../services/educationService");
const logger = require("../utils/logger");

// Get all education details
exports.getAllEducation = async (req, res) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const educationList = await educationService.getAllEducation(userId);
    res.json(educationList);
  } catch (error) {
    logger("Error fetching education details:", error);
    res.status(404).json({ message: error.message });
  }
};

// Create a new education entry
exports.createEducation = async (req, res) => {
  const { degreeTitle, college, startYear, endYear, bulletPoints } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const newEducation = await educationService.createEducation(
      degreeTitle,
      college,
      startYear,
      endYear,
      bulletPoints,
      userId
    );
    res.status(201).json(newEducation);
  } catch (error) {
    logger("Error creating education entry:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an existing education entry
exports.updateEducation = async (req, res) => {
  const { id } = req.params;
  const { degreeTitle, college, startYear, endYear, bulletPoints } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    console.log(req.body, userId);
    const updatedEducation = await educationService.updateEducation(
      id,
      degreeTitle,
      college,
      startYear,
      endYear,
      bulletPoints,
      userId
    );
    res.json(updatedEducation);
  } catch (error) {
    logger("Error updating education entry:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete an education entry
exports.deleteEducation = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    await educationService.deleteEducation(id, userId);
    res.status(202).send();
  } catch (error) {
    logger("Error deleting education entry:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
