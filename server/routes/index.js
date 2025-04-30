const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/api/login', userController.login)
router.post('/api/signup', userController.signup)
router.get('/api/projects', authMiddleware, () => {
  //controller
})

module.exports = router
