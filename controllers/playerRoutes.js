const express = require("express");
const router = express.Router();
const { Player, Team } = require("../models");
const withAuth = require("../utils/auth");

// GET /players/:id - Show details for a specific player
router.get("/:id", withAuth, async (req, res) => {
  try {
    const playerData = await Player.findByPk(req.params.id, {
      include: [{ model: Team }],
    });

    if (!playerData) {
      res.status(404).json({ message: "No player found with this id!" });
      return;
    }

    const player = playerData.get({ plain: true });

    res.render("players", { player  });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET /players/new - Show a form to create a new player
router.get("/addplayer", withAuth, (req, res) => {
  res.render("new-player");
});



// GET route to list players
router.get("/", withAuth, async (req, res) => {

  try {
    const playersData = await Player.findAll({
      include: [{ model: Team }],
      order: [["name", "ASC"]],
    });

    const players = playersData.map((player) => player.get({ plain: true }));

    res.render("players", { players });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
