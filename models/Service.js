const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Service = sequelize.define('Service', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    adresse: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
   
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }

});

module.exports = Service;

