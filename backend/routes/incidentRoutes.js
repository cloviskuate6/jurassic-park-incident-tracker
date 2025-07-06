const express = require('express');
const router = express.Router();
const IncidentController = require('../controllers/IncidentController');

router.get('/', IncidentController.getAll);
router.post('/', IncidentController.create);
router.patch('/:id', IncidentController.updateStatus);

module.exports = router;
