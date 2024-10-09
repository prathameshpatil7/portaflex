const personalDetailsService = require("../services/personalDetailsService");
const logger = require("../utils/logger");

// Get personal details
exports.getPersonalDetails = async (req, res) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const personalDetails = await personalDetailsService.getPersonalDetails(
      userId
    );
    res.json(personalDetails);
  } catch (error) {
    logger("Error fetching personal details:", error);
    res.status(404).json({ message: error.message });
  }
};

// Create new personal details
exports.createPersonalDetails = async (req, res) => {
  const { name, emailId, designation, location, links } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const newPersonalDetails =
      await personalDetailsService.createPersonalDetails(
        name,
        emailId,
        designation,
        location,
        links,
        userId
      );
    res.status(201).json(newPersonalDetails);
  } catch (error) {
    logger("Error creating personal details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update personal details
exports.updatePersonalDetails = async (req, res) => {
  const { id } = req.params;
  const { name, emailId, designation, location, links } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const updatedPersonalDetails =
      await personalDetailsService.updatePersonalDetails(
        id,
        name,
        emailId,
        designation,
        location,
        links,
        userId
      );
    res.json(updatedPersonalDetails);
  } catch (error) {
    logger("Error updating personal details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete personal details
exports.deletePersonalDetails = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    await personalDetailsService.deletePersonalDetails(id, userId);
    res.status(202).send();
  } catch (error) {
    logger("Error deleting personal details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
