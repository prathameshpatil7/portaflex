// models/adminModel.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "admin", // Default role is admin
  },
});

// Hash the password before saving the admin
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare the input password with the hashed password
adminSchema.methods.matchPassword = async function (inputPassword) {
  const Respond = await bcrypt.compare(inputPassword, this.password);
  return Respond;
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
