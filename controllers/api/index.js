const router = require("express").Router();
const playerEditRoutes = require("./player_edit_routes");

router.use("/players", playerEditRoutes);

module.exports = router;
