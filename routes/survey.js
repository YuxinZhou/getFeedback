const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const Survey = mongoose.model('surveys');
const SurveyTemplate = require('../services/mailTemplate/surveyTemplate');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits,
    (req, res) => {
      const {title, subject, body, recipients} = req.body;
      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email => ({email: email})),
        _user: req.user.id,  // generated by Mongo,
        dateSent: Date.now()
      });
      // send an email
      const mailer = new Mailer(survey, SurveyTemplate(survey));

      mailer.send()
        .then(mailer => {
          return survey.save();
        })
        .then(survey => {
          req.user.credits -= 1;
          return req.user.save();
        })
        .then(user => {
          res.send(user);
        })
        .catch(err => {
          res.status(422).send(err);
        });
    })
};