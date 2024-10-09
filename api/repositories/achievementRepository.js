const Achievement = require("../models/achievementModel");

class AchievementRepository {
  // Fetch all achievements
  async findAchievements(userId) {
    return await Achievement.find({ userId });
  }

  // Create new achievement
  async createAchievement(achievementData) {
    const newAchievement = new Achievement(achievementData);
    return await newAchievement.save();
  }

  // Update an achievement
  async updateAchievement(id, achievementData, userId) {
    // Find the existing achievement category to ensure the user owns it
    const existingAchievement = await Achievement.findOne({
      _id: id,
      userId,
    });

    if (!existingAchievement) {
      throw new Error("Not authorized to update this achievement");
    }
    return await Achievement.findByIdAndUpdate(id, achievementData, {
      new: true,
    });
  }

  // Delete an achievement
  async deleteAchievement(id, userId) {
    // Find the existing achievement category to ensure the user owns it
    const existingAchievement = await Achievement.findOne({
      _id: id,
      userId,
    });

    if (!existingAchievement) {
      throw new Error("Not authorized to delete this achievement");
    }
    return await Achievement.findByIdAndDelete(id);
  }
}

module.exports = new AchievementRepository();
