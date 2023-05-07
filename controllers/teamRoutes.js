const express = require("express");
const router = express.Router();
const { Player, Team, User } = require("../models");
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

router.get("/:id", withAuth, async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Player,
        },
      ],
    });
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    console.log(team);
    res.render("team-single", { team });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
