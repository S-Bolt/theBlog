const router = require('express').Router();
const { User, BlogPost} = require('../models');
//const { withGuard } = require('../utils/auth');

//Dashboard route
router.get('/', async (req, res) => {
    try {
        const postData = await BlogPost.findAll({
            where: {
                userId: req.session.user_id
            },
        });
        //serializing data
        const posts = postData.map((post) => post.get({ plain: true}));
        //fetch user data
        const user = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }
        });
        //serialize user data
        const users = user.get({ plain: true});
        //render dashboard with post and user data
        res.render('dashboard', {
        posts,
        user: users,
        logged_in: req.session.logged_in
        });

        } catch (err) {
        res.status(500).json(err);
        }
});

module.exports = router;
