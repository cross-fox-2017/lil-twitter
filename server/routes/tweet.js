var express = require('express');
var router = express.Router();
var modelTweet = require('../models/tweet')


router.post('/add', function(req, res, next) {
  var getTag = req.body.dataTweet.match(/\S*#(?:\[[^\]]+\]|\S+)/g)
  var addTweet = new modelTweet({
    tweet: req.body.dataTweet,
    tag: getTag || ""
  })
  addTweet.save(function(err, result) {
    if(err){
      res.send(err)
    }
    else{
      res.send(result)
    }
  })
});

router.delete('/delete', function(req, res, next) {
  modelTweet.findByIdAndRemove(req.body.id, function(err) {
    if(err)res.send(err)
    else res.send("Tweet Removed")
  })
});

router.post('/find', function(req, res, next) {
  modelTweet.find({},function(result) {
    var tampung = []
    for (var i = 0; i < result.length; i++) {
      if(result[i].tag.indexOf(req.body.tag)>=0){
        tampung.push(result[i].tweet)
      }
    }
    res.send(tampung)
  })
});

router.get('/getAll', function(req, res, next) {
  modelTweet.find({},function(err, result) {
    res.send(result)
  })
});






module.exports = router;
