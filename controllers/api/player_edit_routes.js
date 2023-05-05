const express = require("express");
const router = express.Router();
const { Player } = require("../../models");
const withAuth = require('../../utils/auth');


// Create a new player
router.post("/players", withAuth, async (req, res) => {
  try {
    const {
      name,
      position,
      goals,
      jerseyNumber,
      weakFoot,
      strongFoot,
      teamId,
    } = req.body;
    const player = await Player.create({
      name,
      position,
      goals,
      jerseyNumber,
      weakFoot,
      strongFoot,
      teamId,
    });
    res.json(player);
  } catch (error) {
    res.status(400).json({ message: "Player not created" });
  }
});

// Get the form to edit a player

router.get("/players/:id/edit", withAuth ,async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      res.render("edit-player", { player });
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a player
router.put("/players/:id", withAuth, async (req, res) => {
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
    res.status(400).json({ message: "Player not updated" });
  }
});

// Delete a player
router.delete("/players/:id", withAuth, async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      await player.destroy();
      res.json({ message: "Player deleted" });
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Player not deleted" });
  }
});

module.exports = router;
