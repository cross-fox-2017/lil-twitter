var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var twitSchema = new Schema({
  avatar_url     : String,
  username     : String,
  content    : String,
},{
  timestamps: true
});

module.exports = mongoose.model('twit', twitSchema);
