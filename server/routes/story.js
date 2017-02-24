var express = require('express')
var router = express.Router()
var controller = require('../controllers/story')

/* GET users listing. */
router.post('/story', controller.create)
router.delete('/story', controller.delete)
router.get('/story/:token', controller.read)
router.get('/past/:token', controller.past)
router.get('/all', controller.all)
router.post('/search', controller.search)

module.exports = router
