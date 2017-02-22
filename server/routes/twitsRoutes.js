var express = require('express');
var router = express.Router();
var twitsController = require('../controllers/twitsController.js');

router.get('/', twitsController.list);
router.get('/:id', twitsController.show);
router.post('/', twitsController.create);
router.put('/:id', twitsController.update);
router.delete('/:id', twitsController.remove);

module.exports = router;
