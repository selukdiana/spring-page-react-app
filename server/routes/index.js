const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const springComponentsController = require('../controllers/springComponentsController')
const authMiddleware = require('../middlewares/authMiddleware')
const { body } = require('express-validator')

router.post('/api/login', userController.login)
router.post(
  '/api/signup',
  body('username').isLength({ min: 3 }),
  body('password')
    .matches(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,}$/, 'i')
    .equals(body('confirmPassword')),
  body('firstName').isLength({ min: 3 }),
  body('lastName').isLength({ min: 3 }),
  body('age').isNumeric(),
  userController.signup
)
router.get('/api/refresh', userController.refresh)
// router.post('/api/logout', userController.logout)
router.get('/api/projects', authMiddleware, springComponentsController.get)

module.exports = router
