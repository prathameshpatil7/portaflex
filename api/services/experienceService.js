const experienceRepository = require("../repositories/experienceRepository");

const getAllExperiences = async (userId) => {
  return await experienceRepository.findAllExperiences(userId);
};

const getExperienceById = async (id) => {
  return await experienceRepository.findExperienceById(id);
};

const createExperience = async (experienceData, userId) => {
  return await experienceRepository.createExperience({
    ...experienceData,
    userId,
  });
};

const updateExperience = async (id, experienceData, userId) => {
  return await experienceRepository.updateExperience(
    id,
    { ...experienceData, userId },
    userId
  );
};

const deleteExperience = async (id, userId) => {
  return await experienceRepository.deleteExperience(id, userId);
};

module.exports = {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
};
