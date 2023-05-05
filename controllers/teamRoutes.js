const express = require("express");
const router = express.Router();
const { Player, Team } = require("../models");
const withAuth = require("../utils/auth");

// GET / - Home page with a list of all teams and their players
router.get("/", withAuth, async (req, res) => {
  try {
    const teamsData = await Team.findAll({
      include: [{ model: Player }],
    });

    const teams = teamsData.map((team) => team.get({ plain: true }));

    res.render("teamsAndPlayers", { teams });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
