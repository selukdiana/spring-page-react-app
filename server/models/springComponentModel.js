const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const SpringComponent = sequelize.define('springComponent', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  version: { type: DataTypes.STRING },
  versionsAddition: { type: DataTypes.INTEGER },
})
