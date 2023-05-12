const express = require("express");
const router = express.Router();
const { Player, Team, User } = require("../models");
const withAuth = require("../utils/auth");
const english_dict = require('../languages/en.json');
const arabic_dict = require('../languages/ar.json');

function determineLanguage(language) {
    return language === 'en' ? english_dict : arabic_dict;
  }
// GET / - Home page with a list of all teams
router.get("/", withAuth, async (req, res) => {
  
  try {
    const teamsData = await Team.findAll({
      include: [{ model: Player }],
    });

    const teams = teamsData.map((team) => team.get({ plain: true }));

    res.render("teamsAndPlayers", { teams, language:determineLanguage(req.session.language)} );
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }

});

module.exports = router;

// GET route for single team info

router.get("/:id", withAuth, async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"]
        },
        {
          model: Player,
        },
      ],
    });
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    // console.log(team);
    const teamPlain = team.get({ plain: true });
    console.log(teamPlain);
    const teamPlainFake = {
      filename: "devils-logo.png",
      name: "Devils",
      team: {
        players: [
          {name:"AJ",position:"CM"},
          {name:"BK",position:"CAM"},
          {name:"CS",position:"RF"}
        ]
      }
    
    }
    res.render("team-single", {team:teamPlain, language:determineLanguage(req.session.language)});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
