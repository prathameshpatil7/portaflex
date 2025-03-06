const achievementRepository = require("../repositories/achievementRepository");

class AchievementService {
  // Get all achievements
  async getAchievements(userId) {
    return await achievementRepository.findAchievements();
  }

  // Create new achievement
  async createAchievement(title, date, link, bulletPoints, userId) {
    const achievementData = { title, date, link, bulletPoints, userId };
    return await achievementRepository.createAchievement(achievementData);
  }

  // Update an achievement
  async updateAchievement(id, title, date, link, bulletPoints, userId) {
    const achievementData = { title, date, link, bulletPoints, userId };
    return await achievementRepository.updateAchievement(
      id,
      achievementData,
      userId
    );
  }

  // Delete an achievement
  async deleteAchievement(id, userId) {
    await achievementRepository.deleteAchievement(id, userId);
  }
}

module.exports = new AchievementService();
