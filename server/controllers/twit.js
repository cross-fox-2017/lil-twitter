const Twit = require('../model/twit');
module.exports = {
  create : function(req, res, next){
    Twit.create({
      avatar_url     : req.body.avatar_url,
      username     : req.body.username,
      content    : req.body.content
    }, function (err, data){
      res.send(data);
    })
  }
  ,

  find : function(req, res, next) {
    Twit.find({}, function (err, data){
      res.send(data);
    })
  },

  search : function(req, res, next) {
    var kata = req.query.q
    Twit.find({ content: { $regex: kata, $options: 'i' } }, function (err, data){
      res.send(data);
    })
  },

  delete : function(req, res, next) {
    Twit.remove({_id: req.params.id}, function (err, data){
        if (err) throw err
      res.send({message:`twit dengan id ${req.params.id} berhasil dihapus`})
    })
  },

  update : function(req, res, next) {
    Twit.findOneAndUpdate({_id: req.params.id},{
      avatar_url     : req.body.avatar_url,
      username     : req.body.username,
      content    : req.body.content
    })
      .then(function(result){
        res.send(result)
      })
      .catch(function(err){
        res.json('error')
      })
  }
}
