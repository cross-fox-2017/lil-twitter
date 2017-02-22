var Twitter = require('../models/twitter')

module.exports = {
  get_all_tweet:function(req,res){
    Twitter.find({}).sort({createdAt:-1}).exec(function(err,data){
      res.send(data)
    })
  },
  create_tweet:function(req,res){
      var new_tweets = new Twitter({
        title:req.body.title,
        content:req.body.content,
        postBy:req.body.postBy
      })

      new_tweets.save(function(err,data){
        console.log(data);
        if(err)throw err
        res.send(data)
      })
  },
  search_tweet:function(req,res){
    Twitter.find({title:new RegExp(req.body.title,'g')},function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  delete_tweet:function(req,res){
    console.log(req.body);
    Twitter.findOneAndRemove({_id:req.body.id},function(err, data){
      if(err)throw err
      console.log(data);
      res.send(data)

    })
  }
}
