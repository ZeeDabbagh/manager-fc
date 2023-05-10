const router = require('express').Router();

router.get('/', async (req, res) => {

  res.render('homepage',{loggedIn: req.session.logged_in} );
  });


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {loggedIn: req.session.logged_in});
});

router.get('/addplayer', (req, res) => {

  if (!req.session.logged_in) {
    res.redirect('/');
   
  }

  res.render('new-player', {loggedIn: req.session.logged_in});
});

module.exports = router;
  