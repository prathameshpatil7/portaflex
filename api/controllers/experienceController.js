const experienceService = require("../services/experienceService");
const logger = require("../utils/logger");

// Get all experiences
const getAllExperiences = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const experiences = await experienceService.getAllExperiences(userId);
    logger("Fetched all experiences", experiences);
    res.status(200).json(experiences);
  } catch (error) {
    logger("Error fetching experiences", error.message);
    next(error);
  }
};

const createExperiences = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const experiencesData = req.body; // Expecting an array of experience objects

    // if (!Array.isArray(experiencesData)) {
    //   return res
    //     .status(400)
    //     .json({ message: "Invalid input format, expected an array." });
    // }

    // const newExperiences = await Promise.all(
    //   experiencesData.map((exp) =>
    await experienceService.createExperience(experiencesData, userId);
    //   )
    // );

    logger("Experiences created");
    res.status(201).json({ success: true });
  } catch (error) {
    logger("Error creating experiences", error.message);
    next(error);
  }
};

// Update an experience by ID
const updateExperience = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const updatedExperience = await experienceService.updateExperience(
      req.params.id,
      req.body,
      userId
    );
    logger(`Experience updated (ID: ${req.params.id})`, updatedExperience);
    res.status(200).json(updatedExperience);
  } catch (error) {
    logger("Error updating experience", error.message);
    next(error);
  }
};

// Delete an experience by ID
const deleteExperience = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    await experienceService.deleteExperience(req.params.id, userId);
    logger(`Experience deleted (ID: ${req.params.id})`);
    res.status(202).json({ message: "Experience deleted" });
  } catch (error) {
    logger("Error deleting experience", error.message);
    next(error);
  }
};

module.exports = {
  getAllExperiences,
  createExperiences,
  updateExperience,
  deleteExperience,
};
