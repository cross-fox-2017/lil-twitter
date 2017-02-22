var twitModel = require('../models/twitsModel.js');

module.exports = {
    list: function (req, res) {
        twitModel.find(function (err, twits) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting twit.',
                    error: err
                });
            }
            return res.json(twits);
        });
    },
    show: function (req, res) {
        var id = req.params.id;
        twitModel.findOne({_id: id}, function (err, twit) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting twit.',
                    error: err
                });
            }
            if (!twit) {
                return res.status(404).json({
                    message: 'No such twit'
                });
            }
            return res.json(twit);
        });
    },
    create: function (req, res) {
        var twit = new twitModel({			content : req.body.content,			hashtag : req.body.hashtag,			createdAt : req.body.createdAt,			userid : req.body.userid
        });

        twit.save(function (err, twit) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating twit',
                    error: err
                });
            }
            return res.status(201).json(twit);
        });
    },
    update: function (req, res) {
        var id = req.params.id;
        twitModel.findOne({_id: id}, function (err, twit) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting twit',
                    error: err
                });
            }
            if (!twit) {
                return res.status(404).json({
                    message: 'No such twit'
                });
            }
            twit.content = req.body.content ? req.body.content : twit.content;			twit.hashtag = req.body.hashtag ? req.body.hashtag : twit.hashtag;			twit.createdAt = req.body.createdAt ? req.body.createdAt : twit.createdAt;			twit.userid = req.body.userid ? req.body.userid : twit.userid;            twit.save(function (err, twit) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating twit.',
                        error: err
                    });
                }

                return res.json(twit);
            });
        });
    },
    remove: function (req, res) {
        var id = req.params.id;
        twitModel.findByIdAndRemove(id, function (err, twit) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the twit.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    search: function (req, res) {
        twitModel.find({content: {$regex: new RegExp(req.body.search, "ig")}}, function(err, twits){
            if (err) {
                return res.status(500).json({
                    massage: 'Search does not match any twit',
                    error: err
                });
            }
            return res.json(twits)
        })
    }
};
