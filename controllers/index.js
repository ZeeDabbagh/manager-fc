const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const playerRoutes = require("./playerRoutes");

router.use('/', homeRoutes);
router.use('/players', playerRoutes);
router.use('/api', apiRoutes);

module.exports = router;
