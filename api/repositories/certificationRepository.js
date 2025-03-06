const Certification = require("../models/certificationModel");

class CertificationRepository {
  // Fetch all certifications
  async findCertifications(userId) {
    return await Certification.find({ userId });
  }

  // Create new certification
  async createCertification(certificationData) {
    const newCertification = new Certification(certificationData);
    return await newCertification.save();
  }

  // Update an certification
  async updateCertification(id, certificationData, userId) {
    // Find the existing certification category to ensure the user owns it
    const existingCertification = await Certification.findOne({
      _id: id,
      userId,
    });

    if (!existingCertification) {
      throw new Error("Not authorized to update this certification");
    }
    return await Certification.findByIdAndUpdate(id, certificationData, {
      new: true,
    });
  }

  // Delete an certification
  async deleteCertification(id, userId) {
    // Find the existing certification category to ensure the user owns it
    const existingCertification = await Certification.findOne({
      _id: id,
      userId,
    });

    if (!existingCertification) {
      throw new Error("Not authorized to delete this certification");
    }
    return await Certification.findByIdAndDelete(id);
  }
}

module.exports = new CertificationRepository();
