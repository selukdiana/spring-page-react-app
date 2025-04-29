const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/api/login', userController.getUser)
router.post('/api/signup', userController.createUser)

module.exports = router
