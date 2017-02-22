var mongoose = require('mongoose')
var Schema = mongoose.Schema

var twitterSchema = Schema({
  title:String,
  content:String,
  postBy:String
},{
  timestamps:true
})

var Twitter = mongoose.model('Twitter', twitterSchema);

module.exports = Twitter;
