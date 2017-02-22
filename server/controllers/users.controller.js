var User = require('../models/user')

module.exports ={
  create:function(req,res){
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    })
  }
}
