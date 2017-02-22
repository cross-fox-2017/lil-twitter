var express = require('express')
var router = express.Router()
var postsController = require('../controllers/postsController.js')

router.get('/', postsController.list)
router.get('/:id', postsController.show)
router.post('/', postsController.create)
router.put('/:id', postsController.update)
router.delete('/:id', postsController.remove)

module.exports = router
