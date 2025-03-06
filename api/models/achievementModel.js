const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  title: { type: String },
  date: { type: String }, // Using string for more flexibility with date formats
  link: { type: String }, // Array of links with name and url
  bulletPoints: { type: String }, // Array of bullet points
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Achievement", achievementSchema);
