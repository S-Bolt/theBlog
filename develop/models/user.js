const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password)
    }
}

User.init(
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

module.exports = Project;