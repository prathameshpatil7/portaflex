const cloudinary = require("../config/cloudinary");
const fs = require("fs"); // To remove files after upload
const projectService = require("../services/projectService");
const logger = require("../utils/logger");

const getAllProjects = async (req, res, next) => {
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const projects = await projectService.getAllProjects(userId);
    res.status(200).json(projects);
  } catch (error) {
    logger("Error fetching projects in controller", error.message); // Log error
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const project = await projectService.getProjectById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    logger("Error getting project by ID in controller", error.message); // Log error
    next(error);
  }
};

const createProject = async (req, res, next) => {
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const { title, technologies, bulletPoints, date, githubLink, liveLink } =
      req.body;

    const projectBody = {
      title,
      technologies: JSON.parse(technologies),
      bulletPoints: bulletPoints,
      date,
      githubLink,
      liveLink,
      images: req.body.imageUrls, // Store image URLs in the project document
    };
    const newProject = await projectService.createProject(projectBody, userId);
    res.status(201).json(newProject);
  } catch (error) {
    logger("Error creating project in controller", error.message); // Log error
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const { title, technologies, bulletPoints, date, githubLink, liveLink } =
      req.body;

    const imageUrls = req.body.imageUrls;

    // Prepare project update body
    const projectBody = {
      title,
      technologies: JSON.parse(technologies),
      bulletPoints: bulletPoints,
      date,
      githubLink,
      liveLink,
      images: imageUrls, // Store image URLs in the project document
    };

    // Call the service to update the project
    const updatedProject = await projectService.updateProject(
      req.params.id,
      projectBody,
      userId
    );

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error("Error updating project in controller:", error);
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  const userId = req.user._id; // Get userId from the decoded token
  try {
    await projectService.deleteProject(req.params.id, userId);
    res.status(201).json({ success: true });
  } catch (error) {
    logger("Error deleting project in controller", error.message); // Log error
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
