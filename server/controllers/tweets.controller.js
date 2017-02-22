var Tweet = require('../models/tweet')
var x
module.exports = {
  create: function(req,res,next){
    var newTweet = new Tweet({
      tweet: req.body.tweet,
      username:"timocodex",
      tag:[],
      createdAt:new Date(),
      avatar:req.body.avatar
    })

    newTweet.save(function(err){
      if(err){
        res.send(err)
      }
      else{
        x= newTweet._id
        next()
      }
    })
  },
  adding:function(req,res){
    Tweet.findOne({_id:x},function(err,result){
      var y = result.tweet.match(/#\w+/g)
      y.forEach(function(hasil){
        result.tag.push(hasil.split('#')[1])
      })
      result.markModified('tag')
      result.save(function(err){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    })
  },
  delete: function(req,res){
    Tweet.findOneAndRemove({_id:req.params.id},function(err){
      if(err){
        res.send(err)
      }
      else{
        res.send('sukses delete')
      }
    })
  },
  show: function(req,res){
    Tweet.find({},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
  },
  searchByTag:function(req,res){
    Tweet.find({tag:{$in:[req.query.q]}},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
  },
  search: function(req,res){

    Tweet.find({tweet:new RegExp(".*"+req.query.q+".*","i")},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
  }
}
