const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//post route for adding comment to specific post
router.post('/post/:id/comment', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body['comment-text'],
            blogPostId: req.params.id,
            userId: req.session.userId,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;