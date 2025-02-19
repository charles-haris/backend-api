const { DataTypes } = require('sequelize')
const sequelize = require('../database/config')
const User = require('./User')
const Role = require('./Role')


const UserRole = sequelize.define('UserRole', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    roleID: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    }

});

module.exports = UserRole