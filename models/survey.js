const mongoose = require('mongoose');
const {Schema} = mongoose;
const Recipient = require('./recipients');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [Recipient],
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0},
  _user: { type: Schema.Types.ObjectId, ref: 'users'},
  dateSent: Date,
  lastResponse: Date
});

mongoose.model('surveys', surveySchema);