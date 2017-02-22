var express = require('express');
var router = express.Router();
var modelUser = require('../models/user')


router.post('/add', function(req, res, next) {
  var addUser = new modelUser({
    username: req.body.dataUser.username,
    email: req.body.dataUser.email,
    password: req.body.dataUser.password
    imageUrl: req.body.dataUser.imageUrl
    tweetID: []
  })
  addUser.save(function(err, result) {
    if(err)res.send(err)
    else res.send(result)
  })
});





module.exports = router;
