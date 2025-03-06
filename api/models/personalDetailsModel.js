const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String },
});

const personalDetailsSchema = new mongoose.Schema({
  name: { type: String },
  emailId: { type: String },
  designation: { type: String },
  location: { type: String },
  githubLink: { type: String },
  liveLink: { type: String },
  leetcodeLink: { type: String },
  stackoverflowLink: { type: String },
  experience: { type: Number, min: 0 },
  phone: { type: String },
  images: { type: String },
  careerObjective: { type: String },
  template: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("PersonalDetails", personalDetailsSchema);
