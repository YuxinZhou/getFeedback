const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, (req, res) => {
    stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    })
      .then(charge => {
        req.user.credits += 5;
        return req.user.save(); // return the promise, so that can be chained!
      })
      .then(user => {
        res.send(user);
      })
  });
};