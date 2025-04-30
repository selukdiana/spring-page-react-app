const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  username: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
})

module.exports = User
