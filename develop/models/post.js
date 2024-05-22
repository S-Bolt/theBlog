const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {

        },
        username: {

        },
        email: {

        },
        password: {
            
        }

    }
)

module.exports = Post;