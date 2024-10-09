const skillsService = require("../services/skillsService");
const logger = require("../utils/logger");

// Get all skills
const getAllSkills = async (req, res) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const skills = await skillsService.getSkills(userId);
    res.status(200).json(skills);
  } catch (error) {
    logger("Error fetching skills", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Add a new category, skills
const addSkillsCategory = async (req, res) => {
  const { category, skills } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const newSkills = await skillsService.addSkills(category, skills, userId);
    res.status(201).json(newSkills);
  } catch (error) {
    logger("Error adding new category, skills", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Update an existing category, skills
const updateSkillsCategory = async (req, res) => {
  const { skillsId } = req.params;
  const { category, skills } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  console.log(skillsId);
  try {
    const updatedSkills = await skillsService.updateSkills(
      skillsId,
      category,
      skills,
      userId
    );
    res.status(200).json(updatedSkills);
  } catch (error) {
    logger("Error updating category, skills", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Delete a category, skills
const deleteSkillsCategory = async (req, res) => {
  const { skillsId } = req.params;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    await skillsService.deleteSkills(skillsId, userId);
    res.status(200).send({ message: "Deleted Successfully" });
  } catch (error) {
    logger("Error deleting category, skills", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

module.exports = {
  getAllSkills,
  addSkillsCategory,
  updateSkillsCategory,
  deleteSkillsCategory,
};
