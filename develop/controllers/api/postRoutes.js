const router = require('express').Router();
const { BlogPost, User } = require('../../models');

//Get all post
router.get('/',async (req, res) => {
    try{
        const postData = await BlogPost.findAll({
            include: [User],
        });

        res.status(200).json(postData);

    } catch (err) {
        res.status(err).json(err);
    }
});
//Get a single post 
router.get('/:id', async (req, res) =>{
    try{
        const postData = await BlogPost.findByPk(req.params.id, {
            include: [User],
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!'});
            return;
        }
        res.status(200).json(postData);
    } catch(err) {
        res.status(err).json(err);
    }
});

//Create a new post
router.post('/', async (req, res) =>{
    try{
        const newPost = await BlogPost.create({
            ...req.body,
            userId: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch(err) {
        res.status(500).json(err);
    }
});

//Update a post
router.put('/:id', async (req, res) =>{
    try {
        const updatedPost = await BlogPost.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!updatedPost) {
            res.status(404).json({ message: 'No post found with this id!'});
            return;
        }
        res.status(200).json(updatedPost);
    } catch(err) {
        res.status(500).json(err);
    }
});

//Delete a post
router.delete('/:id', async (req, res) =>{
    try {
        const postData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                userId: req.session.user_id,
            },
        });
        if (!postData){
            res.status(404).json({ message: 'No post found with this id!'});
        }
        res.status(200).json(postData);
    } catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;