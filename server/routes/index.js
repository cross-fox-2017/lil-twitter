var express = require('express');
var router = express.Router();
var controller = require('../controllers/twittController')
/* GET home page. */

router.get('/', function (req,res,next) {
  res.send('use API please')
});

router.post('/api/twitt', controller.createTwitt);

router.get('/api/twitt', controller.allTwitt);

router.get('/api/twitt/search', controller.searchTwitt);

router.delete('/api/twitt/:id', controller.deleteTwitt);

module.exports = router;
