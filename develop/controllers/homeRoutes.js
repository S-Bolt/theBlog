//manage routes for homepage
const router = require('express').Router();
const { Comment, BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');
//need to write this file
//Get all post and render to home.handlbars
router.get('/', async (req, res) => {
    try{
        const blogPostData = await BlogPost.findAll({
            include: [User],
        });
        //serialze data
        const posts = blogPostData.map((post) =>
        post.get({ plain: true}));

        //pass serialized data and session to home
        res.render('home', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err){
        res.status(500).json(err);
    }
})
module.exports = router