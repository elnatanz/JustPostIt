// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports.User = mongoose.model('User', new Schema({
  username: String,
  password: String,
  token_iat: Number
}));
