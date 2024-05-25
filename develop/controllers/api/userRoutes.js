const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');

//Signup route
router.post('/signup', async (req, res) => {
    try{
        const newUser = await User.create({
            username: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
            //Creating session based on logged in new user
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.json({ username: newUser.username, message: 'You are now registred!'});
        });

    }catch (err) {
    res.status(500).json(err);
    }
});
//Login route
router.post('/login', async (req, res) =>{
    try {
        const userData = await User.findOne({ where: { email: req.body.email}});

        if (!userData) {
            res.status.apply(400).json({ message: 'Incorrect email or password, try again.'})
            return;
        }
        //Verify password
        const validPassword = await bcrypt.compare(req.body.password, userData.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, try again.'})
            return;
        }
        //Starting session for loggin in user
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.sesssion.loggedIn = true;

            res.json({ user: userData.username, message: 'You are now logged in'});
        })
    } catch (err){
        res.status(500).json(err);
    }
}),




//Logout route



module.exports = router;