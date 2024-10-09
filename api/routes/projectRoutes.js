const express = require("express");
const projectController = require("../controllers/projectController");
const protect = require("../middlewares/userAuth");
const upload = require("../middlewares/multerSetup");
const cloudinary = require("cloudinary").v2;
const router = express.Router();
const dotenv = require("dotenv");
const uploadToCloudinary = require("../middlewares/cloudinaryUpload");
dotenv.config();
router.get("/", protect, projectController.getAllProjects);
router.get("/:id", protect, projectController.getProjectById);
router.post(
  "/create",
  protect,
  upload.array("images", 10),
  uploadToCloudinary,
  projectController.createProject
);
router.put(
  "/:id",
  protect,
  upload.array("images", 10),
  uploadToCloudinary,
  projectController.updateProject
);
router.delete("/:id", protect, projectController.deleteProject);

module.exports = router;
