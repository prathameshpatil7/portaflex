const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userId: { type: String, sparse: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
// Hash the password before saving the admin
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare the input password with the hashed password
userSchema.methods.matchPassword = async function (inputPassword) {
  const Respond = await bcrypt.compare(inputPassword, this.password);
  return Respond;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
