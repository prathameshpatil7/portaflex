const PersonalDetails = require("../models/personalDetailsModel");

class PersonalDetailsRepository {
  // Fetch personal details
  async findPersonalDetails(userId) {
    return await PersonalDetails.findOne({ userId });
  }

  // Create new personal details
  async createPersonalDetails(personalDetailsData) {
    const newPersonalDetails = new PersonalDetails(personalDetailsData);
    return await newPersonalDetails.save();
  }

  // Update personal details
  async updatePersonalDetails(id, personalDetailsData, userId) {
    // Find the existing details to ensure the user owns it
    const existing = await PersonalDetails.findOne({
      _id: id,
      userId,
    });

    if (!existing) {
      throw new Error("Not authorized to delete");
    }
    return await PersonalDetails.findByIdAndUpdate(id, personalDetailsData, {
      new: true,
    });
  }

  // Delete personal details (if needed)
  async deletePersonalDetails(id, userId) {
    // Find the existing details to ensure the user owns it
    const existing = await PersonalDetails.findOne({
      _id: id,
      userId,
    });

    if (!existing) {
      throw new Error("Not authorized to delete");
    }
    return await PersonalDetails.findByIdAndDelete(id, userId);
  }
}

module.exports = new PersonalDetailsRepository();
