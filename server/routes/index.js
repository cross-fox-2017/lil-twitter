var express = require('express');
var router = express.Router();
var twitter_controller = require('../controller/twitter_controller')

/* GET home page. */

router.get('/twitter',twitter_controller.get_all_tweet)
router.post('/twitter/search',twitter_controller.search_tweet)
router.post('/twitter',twitter_controller.create_tweet)
router.delete('/twitter',twitter_controller.delete_tweet)

module.exports = router;
