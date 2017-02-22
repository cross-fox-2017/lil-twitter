const Twit = require('../model/twit');
module.exports = {
  create : function(req, res, next){
    var tempContent = req.body.content.split(' ')
    for (var i = 0; i < tempContent.length; i++) {
      if(tempContent[i][0]=="#"){
        var datalagi = tempContent[i]
        datalagi = datalagi.replace(/#/g, "")
        tempContent[i]=`<a href="#" onclick="searchHashtag('${datalagi}')">${tempContent[i]}</a>`
      }
    }

    Twit.create({
      avatar_url     : req.body.avatar_url,
      username     : req.body.username,
      content    : tempContent.toString()
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
