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
    var posts = new postsModel({      post: req.body.post,      userId: req.body.userId,      tag: req.body.tag,      createdAt: req.body.createdAt
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

      posts.post = req.body.post ? req.body.post : posts.post;      posts.userId = req.body.userId ? req.body.userId : posts.userId;      posts.tag = req.body.tag ? req.body.tag : posts.tag;      posts.createdAt = req.body.createdAt ? req.body.createdAt : posts.createdAt
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
      return res.status(204).json()
    })
  }
}
