var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var twitSchema = new Schema({
  avatar_url     : String,
  username     : String,
  content    : String,
  {timestamp: true}
});

module.exports = mongoose.model('twit', twitSchema);
