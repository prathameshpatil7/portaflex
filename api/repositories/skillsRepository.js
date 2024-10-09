const Skill = require("../models/skillsModel");

// Get all skills
const getAllSkills = async (userId) => {
  return await Skill.find({ userId });
};

// Add a new skill category
const addSkills = async (data) => {
  const skill = new Skill(data);
  return await skill.save();
};

// Update an existing skill category
const updateSkills = async (id, data) => {
  // Find the existing skills category to ensure the user owns it
  const existingSkills = await Skill.findOne({
    _id: id,
    userId: data.userId,
  });

  if (!existingSkills) {
    throw new Error("Not authorized to update this skills category");
  }
  return await Skill.findByIdAndUpdate(id, data, { new: true });
};

// Delete a skill category
const deleteSkills = async (id, userId) => {
  // Find the existing skills category to ensure the user owns it
  const existingSkills = await Skill.findOne({
    _id: id,
    userId,
  });

  if (!existingSkills) {
    throw new Error("Not authorized to delete this skills category");
  }
  return await Skill.findByIdAndDelete(id);
};

module.exports = {
  getAllSkills,
  addSkills,
  updateSkills,
  deleteSkills,
};
