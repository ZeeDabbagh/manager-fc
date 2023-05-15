const router = require("express").Router();
const Team = require("../../models");
const withAuth = require("../../utils/auth");

// POST route to create a new team with just name
router.post("/teams", withAuth, async (req, res) => {
  try {
    const newTeam = await Team.create({
      name: req.body.name,
    });

    res.status(201).json(newTeam);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
// DELETE route to delete a team by id - This route works but the functionality has not been added to the site yet. For future development.
router.delete("/teams/:id", async (req, res) => {
  try {
    const teamId = req.params.id;

    const deletedTeam = await Team.destroy({
      where: {
        id: teamId,
      },
    });

    if (!deletedTeam) {
      res.status(404).json({ message: "No team found with this id!" });
      return;
    }

    res.status(200).json({ message: "Team deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
