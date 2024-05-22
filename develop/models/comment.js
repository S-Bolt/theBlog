const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

class Comment extends Model {}

Comment.init(
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

module.exports = Comment