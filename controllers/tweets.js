const Tweets = require('../models/tweets')

module.exports = {
  createTweet: (req, res) => {
    let parsedTag = JSON.parse(req.body.tag)
    Tweets.create({
      content: req.body.content,
      userid: req.body.userid,
      postedby: req.body.postedby,
      tag: parsedTag
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  getAllTweets: (req, res) => {
    Tweets.find().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  getTweetByUserId: (req, res) => {
    Tweets.findOne({
      userid: req.params.userid
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  searchTweet: (req, res) => {
    Tweets.findOne({
      content: {
        $regex: req.query.q,
        $options: 'i'
      }
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  updateTweet: (req, res) => {
    Tweets.findOneAndUpdate({
      _id: req.params.id
    }, {tweetname: req.body.tweetname, password: hash.generate(req.body.password), email: req.body.email}, {
      new: true
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  deleteTweet: (req, res) => {
    Tweets.findOneAndRemove({
      _id: req.params.id
    }).then(function (data) {
      res.send({message: `Deleted Tweet with ID: ${req.params.id}`})
    }).catch(function (err) {
      res.send({message: 'Error data not found'})
    })
  }
}
