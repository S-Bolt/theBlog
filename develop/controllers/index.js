const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboardRoutes');
//establishing routing paths
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;