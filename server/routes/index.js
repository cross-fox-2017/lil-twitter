var express = require('express');
var router = express.Router();
var tweet = require('../controllers/tweets.controller.js')
/* GET home page. */
router.get('/',tweet.show);
router.post('/',tweet.create,tweet.adding)
router.get('/search',tweet.search)
router.get('/searchTag',tweet.searchByTag)
router.delete('/:id',tweet.delete)
module.exports = router;
