const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String },
    company: { type: String },
    startDate: { type: String },
    endDate: { type: String, default: "Present" },
    bulletPoints: { type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPresent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
