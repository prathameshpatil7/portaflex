const express = require("express");
const router = express.Router();
const certificationController = require("../controllers/certificationController");

const protect = require("../middlewares/userAuth");

// Get all certifications
router.get("/", protect, certificationController.getCertifications);

// Create new certification
router.post("/create", protect, certificationController.createCertification);

// Update an certification
router.put("/:id", protect, certificationController.updateCertification);

// Delete an certification
router.delete("/:id", protect, certificationController.deleteCertification);

module.exports = router;
