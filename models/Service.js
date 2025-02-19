const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Service = sequelize.define('Service', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    auto_url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    denomination: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sociale: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    siret: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }

});

module.exports = Service;

