const express = require("express");
const router = express.Router();
const summaryController = require("../controllers/summaryController");
const protect = require("../middlewares/userAuth");

// Get summary
router.get("/", protect, summaryController.getSummary);

// Update summary
router.put("/:id", protect, summaryController.updateSummary);

module.exports = router;
