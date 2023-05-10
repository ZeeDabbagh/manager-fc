const router = require('express').Router();
const english_dict = require('../languages/en.json');
const arabic_dict = require('../languages/ar.json');

router.get('/', async (req, res) => {
  const language_details = req.session.language === 'en' ? english_dict : arabic_dict;
  // console.log(language_details)
  res.render('homepage',{loggedIn: req.session.logged_in, language:language_details} );
  });


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  const language_details = req.session.language === 'en' ? english_dict : arabic_dict;
  res.render('login', {loggedIn: req.session.logged_in, language:language_details});
});

router.get('/addplayer', (req, res) => {
  const language_details = req.session.language === 'en' ? english_dict : arabic_dict;

  if (!req.session.logged_in) {
    res.redirect('/');
   
  }

  res.render('new-player', {loggedIn: req.session.logged_in, language:language_details});
});

router.post('/switchLanguage', (req, res) => {
  console.log("switching languange");
  

  const username = req.session.user_id;
  var lang = 'en';
  if (req.session.language === 'en') {
    lang = 'ar';
  } else {
    lang= 'en';
  }
  console.log("language " + lang);
  var actual_dictionary = lang === 'en' ? english_dict : arabic_dict;

  req.session.save(() => {
    req.session.user_id = username;
    req.session.logged_in = true;
    req.session.language = lang;
    
    res.json("success");
    //res.redirect('/');
    // res.json({ user: userData, message: "You are now logged in!" ,loggedIn:req.session.logged_in});
  });
  console.log(actual_dictionary);
  //res.render('homepage',{loggedIn: req.session.logged_in,actual_dictionary } );
 

  //
});

module.exports = router;
  