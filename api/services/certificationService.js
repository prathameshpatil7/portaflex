const certificationRepository = require("../repositories/certificationRepository");

class CertificationService {
  // Get all certifications
  async getCertifications(userId) {
    return await certificationRepository.findCertifications();
  }

  // Create new certification
  async createCertification(title, date, link, userId) {
    const certificationData = { title, date, link, userId };
    return await certificationRepository.createCertification(certificationData);
  }

  // Update an certification
  async updateCertification(id, title, date, link, userId) {
    const certificationData = { title, date, link, userId };
    return await certificationRepository.updateCertification(
      id,
      certificationData,
      userId
    );
  }

  // Delete an certification
  async deleteCertification(id, userId) {
    await certificationRepository.deleteCertification(id, userId);
  }
}

module.exports = new CertificationService();
