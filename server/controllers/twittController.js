const Twitt = require('../models/twitt')

module.exports = {

  createTwitt: function(req,res,next) {

    let newTwitt = Twitt({
      username: req.body.username,
      twitt: req.body.twitt,
      image: req.body.image

    })

    newTwitt.save().then(function(data){
      res.send(data)
    })
  },
  deleteTwitt: function (req,res,next) {
    Twitt.findOneAndRemove({_id: req.params.id})
    .then(function(data){
      res.send('Twitt Deleted')
    })
  },
  searchTwitt: function (req,res,next) {
    Twitt.find({ twitt: { $regex: req.query.q, $options: 'i' } }).then(function (data) {
      res.send(data);
    })
  },
  allTwitt: function (req,res,next) {
    Twitt.find({}).then(function (data) {
      res.send(data);
    })
  }

}
