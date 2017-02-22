const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
  content: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  postedby: String,
  tag: Array
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Tweets', TweetSchema)
