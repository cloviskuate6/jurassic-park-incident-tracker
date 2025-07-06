const { DataTypes } = require('sequelize');
const sequelize = require('../src/sequelize');

const Incident = sequelize.define('Incident', {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('Evasion', 'Panne', 'Blessure'),
    allowNull: false
  },
  zone: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  urgency: {
    type: DataTypes.ENUM('Basse', 'Moyenne', 'Haute'),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('En cours', 'Résolu'),
    allowNull: false,
    defaultValue: 'En cours'
  }
});

module.exports = Incident;
