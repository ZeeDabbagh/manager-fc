const express = require("express");
const router = express.Router();
const { Player, Team } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a new player
router.post("/", withAuth, async (req, res) => {
  try {
    const { name, position, jerseyNumber, weakFoot, strongFoot, teamName } =
      req.body;

    // query team table
    const team = await Team.findOne({
      where: { name: teamName },
    });

    const team_id = team.id;

    const player = await Player.create({
      name,
      position,
      jerseyNumber,
      weakFoot,
      strongFoot,
      team_id,
    });
    console.log(player);
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: "Player not created" });
  }
});

// Get the form to edit a player

router.get("/:id/edit", withAuth, async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      res.render("edit-player", { player });
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a player
router.put("/:id", withAuth, async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      const { name, position, goals, jerseyNumber, weakFoot, strongFoot } =
        req.body;
      await player.update({
        name,
        position,
        goals,
        jerseyNumber,
        weakFoot,
        strongFoot,
      });
      res.json(player);
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Player not updated" });
  }
});

// Delete a player
router.delete("/:name", withAuth, async (req, res) => {
  try {
    const name = req.params.name;
    const player = await Player.findOne({
      where: {
        name: name,
      },
    });
    if (player) {
      await player.destroy();
      res.json({ message: "Player deleted" });
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Player not deleted" });
  }
});

module.exports = router;
