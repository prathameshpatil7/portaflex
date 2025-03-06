const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  date: String,
  technologies: [String],
  githubLink: String,
  liveLink: String,
  bulletPoints: { type: String },
  images: [{ type: String }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
