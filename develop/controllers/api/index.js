//index that connects controller index to api routes
const router = require('express').Router();

const commentRoutes = require('./commentRoutes');

router.use('/comments', commentRoutes);

module.exports = router;