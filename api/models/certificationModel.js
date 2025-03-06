const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  title: { type: String },
  date: { type: String }, // Using string for more flexibility with date formats
  link: { type: String }, // Array of links with name and url
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Certification", certificationSchema);
