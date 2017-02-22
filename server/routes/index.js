var express = require('express');
var router = express.Router();
var twitController = require("../controllers/twit")

router.post('/', twitController.create)

router.get('/', twitController.find)

router.get('/search', twitController.search)

router.put('/:id', twitController.update)

router.delete('/:id', twitController.delete)

module.exports = router;
