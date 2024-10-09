const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const Admin = require("../models/adminModel");
const logger = require("./logger");

// Function to create an admin user
exports.createAdmin = async () => {
  const email = "patil.prathamesh.18et1003@admin.com"; // Set your admin email
  const password = "prathameshPortfolio@7"; // Set your admin password

  try {
    // Check if the admin already exists
    let admin = await Admin.findOne({ email });
    if (admin) {
      logger("Admin user already exists!");
      return;
    }

    // Create a new admin user
    admin = new Admin({
      email,
      password,
      role: "admin",
    });

    await admin.save();
    logger("Admin user created successfully!");
  } catch (error) {
    logger("Error creating admin user:", error);
  }
};
