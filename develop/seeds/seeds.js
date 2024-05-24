const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');
const postData = require('./postData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});
    
}
