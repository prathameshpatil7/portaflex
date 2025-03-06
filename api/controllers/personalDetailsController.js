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
  const {
    name,
    emailId,
    designation,
    // location,
    githubLink,
    linkedinLink,
    leetcodeLink,
    stackoverflowLink,
    experience,
    phone,
    careerObjective,
  } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const body = {
      name,
      emailId,
      designation,
      // location,
      githubLink,
      linkedinLink,
      leetcodeLink,
      stackoverflowLink,
      experience,
      phone,
      images: req.body.imageUrls[0],
      careerObjective,
      template: "violetGlow",
      userId,
    };
    const newPersonalDetails =
      await personalDetailsService.createPersonalDetails(body);
    res.status(201).json(newPersonalDetails);
  } catch (error) {
    logger("Error creating personal details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update personal details
exports.updatePersonalDetails = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    emailId,
    designation,
    // location,
    githubLink,
    linkedinLink,
    leetcodeLink,
    stackoverflowLink,
    experience,
    phone,
    careerObjective,
  } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const body = {
      name,
      emailId,
      designation,
      // location,
      githubLink,
      linkedinLink,
      leetcodeLink,
      stackoverflowLink,
      experience,
      phone,
      images: req.body.imageUrls[0],
      careerObjective,
      userId,
    };
    const updatedPersonalDetails =
      await personalDetailsService.updatePersonalDetails(
        req.params.id,
        body,
        userId
      );
    res.status(200).json(updatedPersonalDetails);
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
    res.status(200).json({ success: true });
  } catch (error) {
    logger("Error deleting personal details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateTemplate = async (req, res) => {
  const { template } = req.body;
  const userId = req.user._id;
  try {
    await personalDetailsService.updateTemplate(template, userId);
    res.status(200).json({ success: true });
  } catch (error) {
    logger("Error updating template:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
