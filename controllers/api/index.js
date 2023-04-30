const router = require('express').Router();
const playerRoutes = require('./playerRoutes');

router.use('/', playerRoutes);

module.exports = router;
