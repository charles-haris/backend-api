const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./User');

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
    cni: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tel: {
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

});

User.hasOne(Profile, { foreignKey: 'userId' })
Profile.belongsTo(User, { foreignKey: 'userId' })

module.exports = Profile;
