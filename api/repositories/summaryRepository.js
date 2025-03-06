const Summary = require("../models/summaryModel");

// Get summary
const get = async (userId) => {
  return await Summary.findOne({ userId });
};

// Update summary
const update = async (content, userId) => {
  return await Summary.findOneAndUpdate(
    { userId }, // Ensure the summary belongs to the user
    { content },
    { new: true, upsert: true }
  );
};

// Delete summary
const deleteSummary = async (userId) => {
  // Find the existing skills category to ensure the user owns it
  const existingSkills = await Summary.findOne({
    userId,
  });

  if (!existingSkills) {
    throw new Error("Not authorized to delete this summary");
  }
  await Summary.findByIdAndDelete(existingSkills._id);
  return true;
};

module.exports = {
  get,
  update,
  deleteSummary,
};
