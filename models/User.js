const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Role = require('./Role')


const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  active: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: true,
    values: 0
  },


});

User.belongsToMany(Role, { through: 'UserRole' })
Role.belongsToMany(User, { through: 'UserRole' })


module.exports = User;

