const User = require("../models/User");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { oauth2client } = require("../utils/googleConfig");
const { generatePassword } = require("../utils/functions");
const Skill = require("../models/skillsModel");
const Experience = require("../models/experienceModel");
const Education = require("../models/educationModel");
const PersonalDetails = require("../models/personalDetailsModel");
const Summary = require("../models/summaryModel");
const Achievement = require("../models/achievementModel");
const Project = require("../models/projectModel");
const Certification = require("../models/certificationModel");

// User Registration
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Create a new user
    const user = new User({
      username: name,
      email,
      password,
    });
    await user.save();

    // Create blank entries for the user
    // await createBlankEntries(user._id);

    res
      .status(201)
      .json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create and assign a token
    const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    // Successful login
    res.status(200).json({
      message: "Login successful",
      user: getUserObj(user), // Only include safe fields
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Check Unique ID Availability
exports.checkUniqueId = async (req, res) => {
  const { userId } = req.params; // Assuming you're sending the userId in the URL

  try {
    // Check if the userId already exists
    const existingUser = await User.findOne({ userId });

    if (existingUser) {
      return res
        .status(400)
        .json({ available: false, message: "User ID is already taken" });
    }

    res.status(200).json({ available: true, message: "User ID is available" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Google Auth Route
exports.googleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    const googleRes = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );

    const { email, name, picture } = userRes.data;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User({
        username: name,
        email,
        password: generatePassword(name),
      }).save();

      // Create blank entries for the user
      // await createBlankEntries(user._id);
    }
    const { _id } = user;
    // Create and assign a token
    const token = jwt.sign({ id: _id, email }, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    // Successful login
    res.status(200).json({
      message: "Login successful",
      userId: user.userId,
      user: getUserObj(user),
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Helper function to check for uniqueness
const checkUniqueFields = async (email, userId) => {
  const existingUser = await User.findOne({
    $or: [{ email }, { userId }],
  });
  return existingUser;
};

// Update user controller
exports.updateUser = async (req, res) => {
  const id = req.user._id; // Get userId from the decoded token
  const { userId, username, email, password } = req.body; // Data from the request body

  try {
    // Find the user by userId
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check for unique fields
    if (email || userId) {
      const existingUser = await checkUniqueFields(email, userId);

      if (existingUser) {
        if (existingUser.email === email) {
          return res.status(400).json({ message: "Email already exists" });
        }
        if (existingUser.userId === userId) {
          return res.status(400).json({ message: "User ID already exists" });
        }
      }
    }

    // Update fields if they are provided
    if (username) user.username = username;
    if (userId) user.userId = userId;
    if (email) user.email = email;
    if (password) {
      // Hash the new password before saving
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Save the updated user
    await user.save();

    return res
      .status(200)
      .json({ message: "User updated successfully", user: getUserObj(user) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Controller function to get user details by ID
exports.getUserProfile = async (req, res) => {
  const id = req.user._id; // Get userId from the decoded token
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: getUserObj(user) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUserObj = (user) => {
  // Exclude the password from the response
  const { password, ...userDetails } = user.toObject();
  return userDetails;
};

exports.getUserData = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { _id } = user.toObject();
    // Fetch data from all sections
    const [
      skills,
      experience,
      education,
      achievements,
      projects,
      summary,
      personalDetails,
      certification,
    ] = await Promise.all([
      Skill.find({ userId: _id }),
      Experience.find({ userId: _id }),
      Education.find({ userId: _id }),
      Achievement.find({ userId: _id }),
      Project.find({ userId: _id }),
      Summary.find({ userId: _id }),
      PersonalDetails.find({ userId: _id }),
      Certification.find({ userId: _id }),
    ]);

    // Send the combined result as a response
    res.status(200).json({
      skills,
      experience,
      education,
      achievements,
      projects,
      summary,
      personalDetails,
      certification,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch portfolio data" });
  }
};

// // Function to create blank entries for a user
// const createBlankEntries = async (userId) => {
//   try {
//     const blankExperience = new Experience({
//       jobTitle: "",
//       company: "",
//       duration: { startDate: "", endDate: "" },
//       isPresent: false,
//       bulletPoints: [""],
//       userId,
//     });

//     const blankSkill = new Skill({
//       category: "",
//       skills: [""],
//       userId,
//     });

//     const blankEducation = new Education({
//       degreeTitle: "",
//       college: "",
//       startYear: "",
//       endYear: "",
//       bulletPoints: [""],
//       userId,
//     });

//     const blankAchievement = new Achievement({
//       title: "",
//       date: "",
//       links: [{ name: "", url: "" }],
//       bulletPoints: [""],
//       userId,
//     });

//     const blankSummary = new Summary({
//       content: "",
//       userId,
//     });

//     const blankProject = new Project({
//       title: "",
//       technologies: [""],
//       bulletPoints: [""],
//       date: "",
//       links: [{ name: "", url: "" }],
//       images: [],
//       userId,
//     });

//     // Save all blank entries concurrently using Promise.all
//     await Promise.all([
//       blankExperience.save(),
//       blankSkill.save(),
//       blankEducation.save(),
//       blankAchievement.save(),
//       blankSummary.save(),
//       blankProject.save(),
//     ]);

//     return { success: true };
//   } catch (error) {
//     console.error("Error creating blank entries: ", error);
//     throw new Error("Failed to create blank entries");
//   }
// };
