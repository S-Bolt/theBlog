//index that connects controller index to api routes
const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes)

module.exports = router;