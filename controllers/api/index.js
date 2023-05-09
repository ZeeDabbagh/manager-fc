const router = require("express").Router();

const playerEditRoutes = require("./player_edit_routes");
const userRoutes = require("./userRoutes");
const teamRoutes = require("./teamRoutes");

router.use("/users", userRoutes);
router.use("/players", playerEditRoutes);
router.use("/teams", teamRoutes);

module.exports = router;
