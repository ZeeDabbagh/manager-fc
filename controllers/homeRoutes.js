const router = require("express").Router();
const determineLanguage = require("../utils/determineLanguage");

router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.logged_in,
    language: determineLanguage(req.session.language),
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    loggedIn: req.session.logged_in,
    language: determineLanguage(req.session.language),
  });
});

router.get('/register', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('register', {language: determineLanguage(req.session.language)});
});

router.get("/addplayer", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
  }

  res.render("new-player", {
    loggedIn: req.session.logged_in,
    language: determineLanguage(req.session.language),
  });
});

router.post("/switchLanguage", (req, res) => {
  console.log("switching languange");

  const username = req.session.user_id;
  var lang;
  if (req.session.language === "en") {
    lang = "ar";
  } else {
    lang = "en";
  }
  console.log("language " + lang);

  req.session.save(() => {
    if (username) req.session.user_id = username;
    req.session.language = lang;

    res.json("success");
  });
});

module.exports = router;
