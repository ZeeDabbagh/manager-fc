// POST route to create a new team with just name 
router.post('/teams', async (req, res) => {
    try {
      const newTeam = await Team.create({
        name: req.body.name
      });
  
      res.status(201).json(newTeam);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  