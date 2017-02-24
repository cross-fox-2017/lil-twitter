var express = require('express')
var router = express.Router()
var controller = require('../controllers/user')

/* GET users listing. */
router.post('/register', controller.register)

router.post('/user', controller.login)

module.exports = router
