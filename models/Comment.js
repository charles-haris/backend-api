const { DataTypes } = require('sequelize')
const sequilize = require('../database/config')
const User = require('./User')

const Comment = sequilize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: id
        }
    }
})

module.exports = Comment