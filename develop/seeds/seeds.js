const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');
const postData = require('./postData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await BlogPost.create({
            ...post,
            userId: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};
seedDatabase();
