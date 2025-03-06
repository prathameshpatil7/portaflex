// controllers/adminController.js
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");
const logger = require("../utils/logger");

// Generate JWT Token
const generateToken = (admin) => {
  return jwt.sign(
    {
      id: admin._id,
      role: admin.role,
      email: admin.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Admin Login Controller
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password is valid
    const isPasswordValid = await admin.matchPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = generateToken(admin);

    // Respond with the token
    res.json({
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    logger("Admin login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
