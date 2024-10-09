const express = require("express");
const router = express.Router();
const personalDetailsController = require("../controllers/personalDetailsController");
const protect = require("../middlewares/userAuth");

// Get personal details
router.get("/", protect, personalDetailsController.getPersonalDetails);

// Create new personal details
router.post(
  "/create",
  protect,
  personalDetailsController.createPersonalDetails
);

// Update personal details
router.put("/:id", protect, personalDetailsController.updatePersonalDetails);

// Delete personal details
router.delete("/:id", protect, personalDetailsController.deletePersonalDetails);

module.exports = router;
