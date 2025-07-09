const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return this.password === candidatePassword;
};

module.exports = mongoose.model('User', userSchema);
