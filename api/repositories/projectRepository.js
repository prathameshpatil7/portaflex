const Project = require("../models/projectModel");

const findAllProjects = async (userId) => {
  return await Project.find({ userId });
};

const findProjectById = async (id) => {
  return await Project.findById(id);
};

const createProject = async (projectData) => {
  const newProject = new Project(projectData);
  return await newProject.save();
};

const updateProject = async (id, projectData, userId) => {
  // Find the existing details to ensure the user owns it
  const existing = await Project.findOne({
    _id: id,
    userId,
  });

  if (!existing) {
    throw new Error("Not authorized to delete");
  }
  return await Project.findByIdAndUpdate(id, projectData, { new: true });
};

const deleteProject = async (id, userId) => {
  // Find the existing details to ensure the user owns it
  const existing = await Project.findOne({
    _id: id,
    userId,
  });

  if (!existing) {
    throw new Error("Not authorized to delete");
  }
  return await Project.findByIdAndDelete(id);
};

module.exports = {
  findAllProjects,
  findProjectById,
  createProject,
  updateProject,
  deleteProject,
};
