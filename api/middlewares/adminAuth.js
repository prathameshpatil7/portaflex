const jwt = require("jsonwebtoken");
const logger = require("../utils/logger");

// Middleware to verify admin JWT token
const adminAuth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    req.user = decoded; // Store decoded token data in req.user
    next();
  } catch (error) {
    logger("Invalid token:", error);
    return res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = adminAuth;
