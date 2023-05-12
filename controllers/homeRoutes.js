const router = require('express').Router();
const english_dict = require('../languages/en.json');
const arabic_dict = require('../languages/ar.json');

router.get('/', async (req, res) => {
  // console.log(language_details)
  res.render('homepage',{loggedIn: req.session.logged_in, language: determineLanguage(req.session.language)} );
  });
function determineLanguage(language) {
  return language === 'ar' ?  arabic_dict: english_dict;
}

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {loggedIn: req.session.logged_in, language: determineLanguage(req.session.language)});
});

router.get('/addplayer', (req, res) => {

  if (!req.session.logged_in) {
    res.redirect('/');
   
  }

  res.render('new-player', {loggedIn: req.session.logged_in, language: determineLanguage(req.session.language)});
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
var defLoggedIn = req.session.logged_in
  req.session.save(() => {
    req.session.user_id = username;
    req.session.logged_in = defLoggedIn
    // req.session.logged_in = true; <-- this line is the issue
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
  