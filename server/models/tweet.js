var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tweetSchema = new Schema({
    avatar: String,
    tweet: String,
    username:{
      type: String,
      required:true,
    },
    tag: Schema.Types.Mixed,
    createdAt:Date
});

var Tweet = mongoose.model("tweets",tweetSchema)
module.exports = Tweet
