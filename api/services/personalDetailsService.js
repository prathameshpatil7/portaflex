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
  async createPersonalDetails(
    name,
    emailId,
    designation,
    location,
    links,
    userId
  ) {
    const personalDetailsData = {
      name,
      emailId,
      designation,
      location,
      links,
      userId,
    };
    return await personalDetailsRepository.createPersonalDetails(
      personalDetailsData
    );
  }

  // Update personal details
  async updatePersonalDetails(
    id,
    name,
    emailId,
    designation,
    location,
    links,
    userId
  ) {
    const personalDetailsData = {
      name,
      emailId,
      designation,
      location,
      links,
      userId,
    };
    return await personalDetailsRepository.updatePersonalDetails(
      id,
      personalDetailsData,
      userId
    );
  }

  // Delete personal details
  async deletePersonalDetails(id, userId) {
    await personalDetailsRepository.deletePersonalDetails(id, userId);
  }
}

module.exports = new PersonalDetailsService();
