const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const twittSchema = new Schema({
  content: String,
  postedBy: String,
  tags: [String]
},{
  timestamps: true
});

const Twitt = mongoose.model('Twitts', twittSchema);
module.exports = Twitt;
