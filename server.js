const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// use middle-wares

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


// "require('./routes/auth')" return a function
require('./routes/auth')(app);
require('./routes/billing')(app);


app.get('/', (req, res) => {
    res.send('hello world');
});


// env is an variable injected by heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT);

