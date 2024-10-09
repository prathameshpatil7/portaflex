// const multer = require("multer");
// const path = require("path");

// // Define storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Store temporarily on disk (optional)
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique file names
//   },
// });

// const upload = multer({ storage: storage });

// module.exports = upload;

const multer = require("multer");

// Set up multer to store files in memory
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

module.exports = upload;

// const multer = require("multer");

// const storage = multer.diskStorage({
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// module.exports = upload;
