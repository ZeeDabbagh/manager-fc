const path = require('path');
const express = require('express');
const session = require('express-session'); // In place of local cookies: MySQL Table automatically created to keep track of your authentication details
const exphbs = require('express-handlebars');
const routes = require('./controllers'); // Functions that implement the route's URL and method
//const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001; // Heroku has env var for port

// Set up Handlebars.js engine with custom helpers
//const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret', // needs to be protected in an evn
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
