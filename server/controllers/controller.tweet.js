const modelTweet = require('../models/model.tweet')

var controllerTweet = {
  /* get all data tweet from database */
  getAllTweet: function (req, res) {
    modelTweet.find({}, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  /* get search data tweet from database */
  searchTweet: function (req, res) {
    console.log(req.body.title)
    modelTweet.find({ title: new RegExp(req.body.title, 'i') }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  /* create new tweet */
  createTweet: function (req, res) {
    var temp = JSON.parse(req.body.tags) || []

    let newTweet = modelTweet({
      title: req.body.title,
      content: req.body.content,
      postBy: req.body.postBy,
      tag: temp
    })

    newTweet.save(function (err, data) {
      if (err) throw err
      console.log(data)
      res.json(data)
    })
  },
  /* delete one tweet */
  deleteOneTweet: function (req, res) {
    modelTweet.findOneAndRemove({ _id: req.body.id }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  }
}

module.exports = controllerTweet
