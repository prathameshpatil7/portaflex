const express = require("express");
const router = express.Router();
const personalDetailsController = require("../controllers/personalDetailsController");
const protect = require("../middlewares/userAuth");
const upload = require("../middlewares/multerSetup");
const uploadToCloudinary = require("../middlewares/cloudinaryUpload");

// Get personal details
router.get("/", protect, personalDetailsController.getPersonalDetails);

// Create new personal details
router.post(
  "/create",
  protect,
  upload.array("images", 10),
  uploadToCloudinary,
  personalDetailsController.createPersonalDetails
);

// Update personal details
router.put(
  "/:id",
  protect,
  upload.array("images", 10),
  uploadToCloudinary,
  personalDetailsController.updatePersonalDetails
);

// Delete personal details
router.delete("/:id", protect, personalDetailsController.deletePersonalDetails);

router.put(
  "/template/update",
  protect,
  personalDetailsController.updateTemplate
);

module.exports = router;
