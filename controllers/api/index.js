
const router = require('express').Router();
const playerRoutes = require('./playerRoutes');

router.use('/', playerRoutes);
const playerEditRoutes = require("./player_edit_routes");

router.use("/players", playerEditRoutes);


module.exports = router;
