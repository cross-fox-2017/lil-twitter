var express = require('express');
var router = express.Router();
var controller = require('../controllers/users.controller')

router.get('/', controller.showTweet)
router.post('/create', controller.createTweet)
router.delete('/:id', controller.deleteTweet)
router.post('/', controller.searchTweet)

module.exports = router;
