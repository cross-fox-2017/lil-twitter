const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userSchema = new Schema({
  username: String,
  imageUrl: String,
  tweet   : String,
  tag     : []
},{
  timestamps: true
})

var User = mongoose.model('User',userSchema);

module.exports = User
