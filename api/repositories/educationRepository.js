const Education = require("../models/educationModel");

class EducationRepository {
  // Find all education documents
  async findAllEducation(userId) {
    return await Education.find({ userId });
  }

  // Find education by ID (for future updates)
  async findEducationById(id) {
    return await Education.findById(id);
  }

  // Create new education entry
  async createEducation(educationData) {
    const newEducation = new Education(educationData);
    return await newEducation.save();
  }

  // Update existing education entry by ID
  async updateEducationById(id, educationData, userId) {
    // Find the existing education to ensure the user owns it
    const existing = await Education.findOne({
      _id: id,
      userId,
    });

    if (!existing) {
      throw new Error("Not authorized to update");
    }
    return await Education.findByIdAndUpdate(id, educationData, {
      new: true,
    });
  }

  // Delete an education entry by ID
  async deleteEducationById(id, userId) {
    // Find the existing education to ensure the user owns it
    const existing = await Education.findOne({
      _id: id,
      userId,
    });

    if (!existing) {
      throw new Error("Not authorized to delete");
    }

    return await Education.findByIdAndDelete(id);
  }
}

module.exports = new EducationRepository();
