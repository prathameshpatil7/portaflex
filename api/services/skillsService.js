const skillsRepository = require("../repositories/skillsRepository");

// Get all skills
const getSkills = async (userId) => {
  return await skillsRepository.getAllSkills(userId);
};

// Add a new skill skills
const addSkills = async (category, skills, userId) => {
  return await skillsRepository.addSkills({ category, skills, userId });
};

// Update an existing skill skills
const updateSkills = async (skillsId, category, skills, userId) => {
  return await skillsRepository.updateSkills(skillsId, {
    category,
    skills,
    userId,
  });
};

// Delete a skill skills
const deleteSkills = async (skillsId, userId) => {
  return await skillsRepository.deleteSkills(skillsId, userId);
};

module.exports = {
  getSkills,
  addSkills,
  updateSkills,
  deleteSkills,
};
