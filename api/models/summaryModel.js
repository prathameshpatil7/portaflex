const mongoose = require("mongoose");

const summarySchema = new mongoose.Schema({
  content: {
    type: String,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Summary", summarySchema);
