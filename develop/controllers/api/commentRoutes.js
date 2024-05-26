const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//post route for adding comment to specific post
router.post('/', withAuth, async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the request body for debugging
        const newComment = await Comment.create({
            content: req.body.content,
            blogPostId: req.params.id,
            userId: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        console.error('Error creating comment:', err); // Log the error for debugging
        res.status(500).json(err);
    }
});

module.exports = router;