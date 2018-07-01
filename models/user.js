const mongoose = require('mongoose');
const {Schema} = mongoose;

// Create UserSchema
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 1 }
});

// Load into mongoose
mongoose.model('users', userSchema);