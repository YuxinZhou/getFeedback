const passport = require('passport');

module.exports = app => {
  app.get('/auth/google',     // 2.
    passport.authenticate('google', // will use google strategy
      {
        scope: ['profile', 'email']
      }
    ));

  app.get('/auth/google/callback',  // 3. // Difference with previous one: has code
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })

};