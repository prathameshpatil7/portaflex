const certificationService = require("../services/certificationService");
const logger = require("../utils/logger");

// Get all certifications
exports.getCertifications = async (req, res) => {
  try {
    const userId = req.user._id; // Get userId from the decoded token
    const certifications = await certificationService.getCertifications(userId);
    res.json(certifications);
  } catch (error) {
    logger("Error fetching certifications:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Create new certification
exports.createCertification = async (req, res) => {
  const { title, date, link } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const newCertification = await certificationService.createCertification(
      title,
      date,
      link,
      userId
    );
    res.status(201).json(newCertification);
  } catch (error) {
    logger("Error creating certification:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Update an certification
exports.updateCertification = async (req, res) => {
  const { id } = req.params;
  const { title, date, link } = req.body;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    const updatedCertification = await certificationService.updateCertification(
      id,
      title,
      date,
      link,
      userId
    );
    res.json(updatedCertification);
  } catch (error) {
    logger("Error updating certification:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Delete an certification
exports.deleteCertification = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id; // Get userId from the decoded token
  try {
    await certificationService.deleteCertification(id, userId);
    res.status(201).json({ success: true });
  } catch (error) {
    logger("Error deleting certification:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
