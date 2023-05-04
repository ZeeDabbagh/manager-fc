const router = require("express").Router();
const playerRoutes = require("./playerRoutes");
const playerEditRoutes = require("./player_edit_routes");

// router.use("/", playerRoutes);

router.use("/players", playerEditRoutes);

module.exports = router;
