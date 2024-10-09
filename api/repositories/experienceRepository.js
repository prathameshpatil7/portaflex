const Experience = require("../models/experienceModel");

const findAllExperiences = async (userId) => {
  return await Experience.find({ userId });
};

const findExperienceById = async (id) => {
  return await Experience.findById(id);
};

const createExperience = async (experienceData) => {
  const newExperience = new Experience(experienceData);
  return await newExperience.save();
};

const updateExperience = async (id, experienceData, userId) => {
  // Find the existing experience to ensure the user owns it
  const existing = await Experience.findOne({
    _id: id,
    userId,
  });

  if (!existing) {
    throw new Error("Not authorized to delete");
  }
  return await Experience.findByIdAndUpdate(id, experienceData, { new: true });
};

const deleteExperience = async (id, userId) => {
  // Find the existing experience to ensure the user owns it
  const existing = await Experience.findOne({
    _id: id,
    userId,
  });

  if (!existing) {
    throw new Error("Not authorized to delete");
  }
  return await Experience.findByIdAndDelete(id, userId);
};

module.exports = {
  findAllExperiences,
  findExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
};
