const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }


});


// RoleAttribution.belongsToMany(User, { through: 'UserRoleAttribution' });


module.exports = Role;
