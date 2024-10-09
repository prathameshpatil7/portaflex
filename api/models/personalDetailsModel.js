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
  links: [linkSchema], // Array of links with name and url
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("PersonalDetails", personalDetailsSchema);
