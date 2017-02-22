var express = require('express');
var router = express.Router();
var modelTweet = require('../models/tweet')


router.post('/add', function(req, res, next) {
  var addTweet = new modelTweet({
    tweet: req.body.tweet,
    tag: req.body.tag
  })
  addTweet.save(function(err, result) {
    if(err)res.send(err)
    else res.send(result)
  })
});

router.delete('/delete', function(req, res, next) {
  modelTweet.findByIdAndRemove(req.body.id, function(err) {
    if(err)res.send(err)
    else res.send("Tweet Removed")
  })
});

router.post('/find', function(req, res, next) {
  modelTweet.find({
      tag: req.body.tag
  },function(result) {
    res.send(result)
  })
});

router.get('/getAll', function(req, res, next) {
  modelTweet.find({},function(result) {
    res.send(result)
  })
});






module.exports = router;
