var postsModel = require('../models/postsModel.js')

module.exports = {
  list: function (req, res) {
    postsModel.find(function (err, posts) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting posts.',
          error: err
        })
      }
      return res.json(posts)
    })
  },

  show: function (req, res) {
    var id = req.params.id
    postsModel.findOne({_id: id}, function (err, posts) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting posts.',
          error: err
        })
      }
      if (!posts) {
        return res.status(404).json({
          message: 'No such posts'
        })
      }
      return res.json(posts)
    })
  },

  create: function (req, res) {
    let tags = JSON.parse(req.body.tag)
    var posts = new postsModel({      post: req.body.post,      userId: req.body.userId,      tag: tags,      createdAt: new Date()
    })

    posts.save(function (err, posts) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating posts',
          error: err
        })
      }
      return res.status(201).json(posts)
    })
  },

  update: function (req, res) {
    var id = req.params.id
    postsModel.findOne({_id: id}, function (err, posts) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting posts',
          error: err
        })
      }
      if (!posts) {
        return res.status(404).json({
          message: 'No such posts'
        })
      }

      posts.post = req.body.post || posts.post;      posts.userId = req.body.userId || posts.userId;      posts.tag = req.body.tag || posts.tag;      posts.createdAt = new Date() || posts.createdAt

      posts.save(function (err, posts) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating posts.',
            error: err
          })
        }

        return res.json(posts)
      })
    })
  },

  remove: function (req, res) {
    var id = req.params.id
    postsModel.findByIdAndRemove(id, function (err, posts) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the posts.',
          error: err
        })
      }
      return res.status(201).json(posts)
    })
  },

  search: function (req, res) {
    let tweet = req.query.q

    postsModel.find({ post: { $regex: tweet, $options: 'i' }, tag: { $regex: tweet, $options: 'i' }}, function (err, posts) {
      if (err) {
        return res.status(500).json({
          message: 'Error when search posts.',
          error: err
        })
      }
      return res.json(posts)
    })
  }
}
