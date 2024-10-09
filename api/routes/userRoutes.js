// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const {
  checkUniqueId,
  loginUser,
  registerUser,
  googleLogin,
  updateUser,
  getUserProfile,
  getUserData,
} = require("../controllers/userController");
const protect = require("../middlewares/userAuth");

router.post("/login", loginUser); // User login route
router.post("/register", registerUser); // User register route

router.get("/check-unique-id/:userId", checkUniqueId); // Route to check if userId is available

router.get("/google", googleLogin); // User register route

router.put("/update", protect, updateUser); // User register route

router.get("/profile", protect, getUserProfile); //  for getting user profile

router.get("/:userId/portfolio", getUserData); // Register userData route
module.exports = router;
