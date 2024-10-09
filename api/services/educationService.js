const educationRepository = require("../repositories/educationRepository");

class EducationService {
  // Get all education details
  async getAllEducation(userId) {
    const educationList = await educationRepository.findAllEducation(userId);
    if (!educationList.length) {
      throw new Error("No education details found");
    }
    return educationList;
  }

  // Create new education entry
  async createEducation(
    degreeTitle,
    college,
    startYear,
    endYear,
    bulletPoints,
    userId
  ) {
    const educationData = {
      degreeTitle,
      college,
      startYear,
      endYear,
      bulletPoints,
      userId,
    };
    const newEducation = await educationRepository.createEducation(
      educationData
    );
    return newEducation;
  }

  // Update existing education entry by ID
  async updateEducation(
    id,
    degreeTitle,
    college,
    startYear,
    endYear,
    bulletPoints,
    userId
  ) {
    const educationData = {
      degreeTitle,
      college,
      startYear,
      endYear,
      bulletPoints,
      userId,
    };
    const updatedEducation = await educationRepository.updateEducationById(
      id,
      educationData,
      userId
    );
    return updatedEducation;
  }

  // Delete education entry by ID
  async deleteEducation(id, userId) {
    await educationRepository.deleteEducationById(id, userId);
  }
}

module.exports = new EducationService();
