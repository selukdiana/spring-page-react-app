const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const springComponentsController = require('../controllers/springComponentsController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/api/login', userController.login)
router.post('/api/signup', userController.signup)
router.get('/api/refresh', userController.refresh)
// router.post('/api/logout', userController.logout)
router.get('/api/projects', authMiddleware, springComponentsController.get)

module.exports = router
