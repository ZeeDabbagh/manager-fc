const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const dotenv = require('dotenv');
const glob = require('glob');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const language_dict = {};

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
   
  },
  resave: false,
  saveUninitialized: true,
  
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Load language files and build language_dict
glob.sync('./languages/*.json').forEach(function(file) {
  const lang = path.basename(file, '.json');
  const data = require(file);
  language_dict[lang] = data;
});

app.use(function(req, res, next) {
  // Get the language code from the URL or use default
  const code = req.path.split('/')[1] || 'en';

  // Set the language in the session
  req.session.lang = code;

  // Set the language data in res.locals for use in templates
  res.locals.lang = language_dict[code] || {};

  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
