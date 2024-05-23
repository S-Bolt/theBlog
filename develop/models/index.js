const User = require('./user');
const Comment = require('./comment');
const BlogPost = require('./post');

//creating associations
User.hasMany(BlogPost, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogPostId',
    onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
    foreignKey: 'userId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPostId'
});


module.exports = { User, Comment, BlogPost };

