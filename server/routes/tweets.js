var express = require('express')
var router = express.Router()
const tweetController = require('../controllers/controller.tweet')

/* get all tweet by search input */
router.post('/search', tweetController.searchTweet)
/* get all tweet posting */
router.get('/', tweetController.getAllTweet)
/* create new posting tweet */
router.post('/', tweetController.createTweet)
/* delete posting tweet */
router.delete('/', tweetController.deleteOneTweet)

module.exports = router
