const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  imageUrl: String,
  tweetID: [{
    type: Schema.Type.ObjectId,
    ref: "Tweet"
  }]
},{
  timestamps: true
})

var User = mongoose.model('User',userSchema);

module.exports = User
