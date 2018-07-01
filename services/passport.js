const passport = require('passport');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// Fetch model class from mongoose. Why don't use `require`? To avoid running
// `moogoose.model('user', userSchema);` multiple times
const User = mongoose.model('users');

// user -> sessionId
passport.serializeUser((user, done) => {
  done(null, user.id); // mongoId
});

// sessionID -> user, stored in req.user
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
});

passport.use(
  new GoogleStrategy(     // 1.
    {                   //configuration
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // need to be set in console.google
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {    // 4. //callback
      // get user's profile from google

      User.findOne({googleId: profile.id})
        .then((user) => {
          if (user) {
            done(null, user)
          }
          else {
            new User({googleId: profile.id})
              .save()
              .then(user => done(null, user)); //save to DB
          }
        });
    }
  )
);