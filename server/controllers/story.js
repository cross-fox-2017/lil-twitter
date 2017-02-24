var Story = require('../models/story')
var Topic = require('../models/topic')
var jwt = require('jsonwebtoken')

module.exports = {
  create: function (req, res) {
    let decoded = jwt.verify(req.body.token, process.env.SECRET)
    let username = decoded.username
    let input = {
      user_id: decoded.user_id,
      story: req.body.story,
      is_deleted: 0
    }

    Story.create(input).then(function (data) {
      let temp = data.story.split(' ')

      temp.forEach(function (word) {
        if (word.startsWith('#')) {
          Topic.findOrCreate({topic: word}, function (err, click, created) {
            if (err) console.log(err)
            if (created) {
              click.storyid.push(data.id)
              click.save(function (err) {
                console.log(err)
              })
            }else {
              click.storyid.push(data.id)
              click.save(function (err) {
                console.log(err)
              })
            }
            res.json({
              success: data,
              user: username
            })
          })
        }
      })
    }).catch(function (err) {
      res.json({err: err})
    })
  },
  read: function (req, res) {
    let decoded = jwt.verify(req.params.token, process.env.SECRET)
    let username = decoded.username
    let user_id = decoded.user_id

    Story.find({user_id: user_id,is_deleted: 0}).then(function (data) {
      res.json({
        mypost: data,
        user: username
      })
    }).catch(function (err) {
      res.json({err: err})
    })
  },
  past: function (req, res) {
    let decoded = jwt.verify(req.params.token, process.env.SECRET)
    let username = decoded.username
    let user_id = decoded.user_id

    Story.find({user_id: user_id,is_deleted: 1}).then(function (data) {
      res.json({
        mypost: data,
        user: username
      })
    }).catch(function (err) {
      res.json({err: err})
    })
  },
  delete: function (req, res) {
    let id = req.body.objid
    Story.findOne({'_id': id}).then(function (data) {
      data.is_deleted = 1
      data.save(function (err) {
        if (err)
          res.json({err: err})
      })
      res.json({forget: true})
    }).catch(function (err) {
      res.json({err: err})
    })
  },

  search: function (req, res) {
    let hastag = req.body.hastag
    Topic.findOne({topic: hastag}).populate('storyid').then(function (data) {
      res.json({hastag: data})
    }).catch(function (err) {
      res.json({err: err})
    })
  },

  all: function (req, res) {
    Story.find({is_deleted: 0}).populate('user_id').then(function (data) {
      res.json({
        timeline: data
      })
    }).catch(function (err) {
      res.json({err: err})
    })
  }
}
