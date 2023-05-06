const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes.js");
const playerRoutes = require("./playerRoutes");
const teamRoutes = require("./teamRoutes");
const userRoutes = require('./api/userRoutes')

router.use("/", homeRoutes);
router.use("/players", playerRoutes);
router.use("/api", apiRoutes);
router.use("/teams", teamRoutes);

module.exports = router;
