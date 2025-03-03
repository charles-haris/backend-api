const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Profile = sequelize.define('Profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    tel: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  

});


module.exports = Profile;
