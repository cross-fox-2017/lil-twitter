const user     = require('../models/users.model')
const mongoose = require('mongoose')

module.exports = {

  createTweet : (req, res) => {
    var getTag = req.body.tweet.match(/\S*#(?:\[[^\]]+\]|\S+)/g)
    var newTweet = new user({
      username: req.body.username,
      imageUrl: req.body.imageurl,
      tweet   : req.body.tweet,
      tag     : getTag || ""
    })
    newTweet.save( (err)=>{
      if(err) throw err
      res.send(newTweet)
    })
  },

  showTweet : (req, res) => {
    user.find({}, (err,data) => {
      if(err) res.send(err)
      res.json(data)
    }).sort('date')
  },

  deleteTweet : (req, res) => {
    user.findOneAndRemove({ _id: req.params.id}, (err) => {
      res.send('This post has been removed')
    })
  },

  searchTweet : (req, res) => {
      user.find({},function(err, result) {
        console.log(result);
        var tampung = []
        for (var i = 0; i < result.length; i++) {
          if(result[i].tag.indexOf(req.body.tag)>=0){
            tampung.push(result[i])
          }
        }
        res.send(tampung)
      })
  }
}
