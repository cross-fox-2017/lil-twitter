var express = require('express');
var router = express.Router();
const controllers = require('../controllers/twitts');

router.get('/', controllers.getTwitts);
router.get('/search', controllers.searchTwitts);
router.get('/:id', controllers.getTwitt);
router.post('/', controllers.postTwitt);
router.delete('/:id', controllers.deleteTwitt);

module.exports = router;
