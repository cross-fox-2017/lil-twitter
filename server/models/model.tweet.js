// grab the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var TweetSchema = new Schema({
  title: String,
  content: String,
  postBy: String,
  tag: [ { type: String } ]
}, {
  timestamps: true
})

// the schema is useless so far
// we need to create a model using it
var Tweet = mongoose.model('Tweet', TweetSchema)

// make this available to our Tweet in our Node applications
module.exports = Tweet
