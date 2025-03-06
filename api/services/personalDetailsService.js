const personalDetailsRepository = require("../repositories/personalDetailsRepository");

class PersonalDetailsService {
  // Get personal details
  async getPersonalDetails(userId) {
    const personalDetails = await personalDetailsRepository.findPersonalDetails(
      userId
    );
    if (!personalDetails) {
      throw new Error("Personal details not found");
    }
    return personalDetails;
  }

  // Create new personal details
  async createPersonalDetails(body) {
    return await personalDetailsRepository.createPersonalDetails(body);
  }

  // Update personal details
  async updatePersonalDetails(id, body, userId) {
    return await personalDetailsRepository.updatePersonalDetails(
      id,
      body,
      userId
    );
  }

  // Update personal details
  async updateTemplate(template, userId) {
    return await personalDetailsRepository.updateTemplate(template, userId);
  }

  // Delete personal details
  async deletePersonalDetails(id, userId) {
    await personalDetailsRepository.deletePersonalDetails(id, userId);
  }
}

module.exports = new PersonalDetailsService();
