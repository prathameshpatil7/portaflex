const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degreeTitle: {
    type: String,
  },
  college: {
    type: String,
  },
  startYear: {
    type: String,
  },
  endYear: {
    type: String,
  },
  bulletPoints: {
    type: [String],
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
