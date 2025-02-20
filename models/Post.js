const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./User');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
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

User.hasMany(Post, { foreignKey: 'userId' })
Post.belongsTo(User, { foreignKey: 'userId' })

module.exports = Post;
