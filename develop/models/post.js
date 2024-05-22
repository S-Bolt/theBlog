const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {

        },
        email: {

        },
        password: {
            
        }

    }
)

module.exports = BlogPost;