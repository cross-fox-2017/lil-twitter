var express = require('express');
var router = express.Router();
var twitController = require('../controllers/twitsController.js');

router.get('/', twitController.list);
router.get('/:id', twitController.show);
router.post('/', twitController.create);
router.put('/:id', twitController.update);
router.delete('/:id', twitController.remove);

module.exports = router;
