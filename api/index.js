const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const skillsRoutes = require("./routes/skillsRoutes");
const summaryRoutes = require("./routes/summaryRoutes");
const personalDetailsRoutes = require("./routes/personalDetailsRoutes");
const achievementRoutes = require("./routes/achievementRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const educationRoutes = require("./routes/educationRoutes");
const certificationRoutes = require("./routes/certificationRoutes");
const errorHandler = require("./middlewares/errorHandler");
const dbConfig = require("./config/dbConfig");
const logger = require("./utils/logger");
const { createAdmin } = require("./utils/createAdmin");
const cors = require("cors");

const app = express();

app.use(express.json());
dotenv.config();

app.use(cors());

// Log all incoming requests
app.use((req, res, next) => {
  logger(`Request received: ${req.method} ${req.url}`);
  next();
});

// routes
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/summary", summaryRoutes);
app.use("/api/personal-details", personalDetailsRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/certification", certificationRoutes);

app.use(errorHandler);

mongoose
  .connect(dbConfig.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger("Connected to MongoDB"); // Log MongoDB connection success
    createAdmin();
    app.listen(4000, () => {
      logger("Server running on port 4000"); // Log server startup
    });
  })
  .catch((err) => {
    logger("MongoDB connection error:", err); // Log MongoDB connection error
  });
