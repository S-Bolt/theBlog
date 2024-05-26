//manage routes for homepage
const router = require('express').Router();
const { userInfo } = require('os');
const { Comment, BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');

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
});
//Get post by certain id and render to post.handlebars
router.get('/post/:id', async (req, res) => {
    try{
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User]
                },
            ],
        });
        //checking if blog post exist
        if (!blogPostData){
            res.status(404).json({message: 'No post with this id!'})
        }
    
        //console.log(blogPostData);

        const post = blogPostData.get({ plain: true});
        console.log(post);

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//route to login page, if session logged sent to dashboard if not to login.
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');

});


module.exports = router