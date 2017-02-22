var express = require('express');
var router = express.Router();
var modelUser = require('../models/user')


router.post('/add', function(req, res, next) {
  var addUser = new modelUser({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    imageUrl: req.body.imageUrl
  })
  addUser.save(function(err, result) {
    if(err)res.send(err)
    else res.send(result)
  })
});


module.exports = router;
