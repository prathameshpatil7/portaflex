const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Skill", skillSchema);
