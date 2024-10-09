const projectRepository = require("../repositories/projectRepository");

const getAllProjects = async (userId) => {
  return await projectRepository.findAllProjects(userId);
};

const getProjectById = async (id) => {
  return await projectRepository.findProjectById(id);
};

const createProject = async (projectData, userId) => {
  return await projectRepository.createProject({ ...projectData, userId });
};

const updateProject = async (id, projectData, userId) => {
  return await projectRepository.updateProject(
    id,
    { ...projectData, userId },
    userId
  );
};

const deleteProject = async (id, userId) => {
  return await projectRepository.deleteProject(id, userId);
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
