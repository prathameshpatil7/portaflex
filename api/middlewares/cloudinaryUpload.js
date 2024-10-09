const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Middleware to upload files to Cloudinary
const uploadToCloudinary = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return next(); // No files to upload
    }

    const imageUrls = await Promise.all(
      req.files.map(
        (file) =>
          new Promise((resolve, reject) => {
            cloudinary.uploader
              .upload_stream({ folder: "projects" }, (error, result) => {
                if (error) reject(error);
                else resolve(result.secure_url);
              })
              .end(file.buffer); // Upload directly from memory buffer
          })
      )
    );

    req.body.imageUrls = imageUrls; // Attach URLs to the request body
    next();
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error.message);
    next(error);
  }
};

module.exports = uploadToCloudinary;
