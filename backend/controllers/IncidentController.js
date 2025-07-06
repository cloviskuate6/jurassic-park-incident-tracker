const IncidentService = require('../services/IncidentService');

class IncidentController {
  static async getAll(req, res, next) {
    try {
      const filters = req.query;
      const incidents = await IncidentService.getAll(filters);
      res.json(incidents);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const incident = await IncidentService.create(req.body);
      res.status(201).json(incident);
    } catch (err) {
      next(err);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updated = await IncidentService.updateStatus(id, status);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = IncidentController;
