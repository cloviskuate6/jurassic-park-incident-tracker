const Incident = require('../models/incident');

class IncidentService {
  static async getAll(filters = {}) {
    return await Incident.findAll({ where: filters });
  }

  static async create(data) {
    return await Incident.create(data);
  }

  static async updateStatus(id, status) {
    const incident = await Incident.findByPk(id);
    if (!incident) throw new Error('Incident not found');
    incident.status = status;
    return await incident.save();
  }
}

module.exports = IncidentService;
