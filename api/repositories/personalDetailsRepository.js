const PersonalDetails = require("../models/personalDetailsModel");

class PersonalDetailsRepository {
  // Fetch personal details
  async findPersonalDetails(userId) {
    return await PersonalDetails.findOne({ userId });
  }

  // Create new personal details
  async createPersonalDetails(data) {
    const newPersonalDetails = new PersonalDetails(data);
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

  // Update template
  async updateTemplate(template, userId) {
    // Find the existing details to ensure the user owns it
    const existing = await PersonalDetails.findOne({
      userId,
    });

    // If the document does not exist or user does not own it, handle it
    if (!existing) {
      throw new Error(
        "Personal details not found or you do not have permission to update."
      );
    }

    // Update the template field
    existing.template = template;

    // Save the updated document
    await existing.save();

    return existing; // Optionally return the updated document
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
