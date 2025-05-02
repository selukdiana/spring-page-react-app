const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const springComponentsController = require('../controllers/springComponentsController')
const authMiddleware = require('../middlewares/authMiddleware')
const { body } = require('express-validator')

router.post('/api/login', userController.login)
router.post(
  '/api/signup',
  body('username').isLength({ min: 3 }).withMessage('Username must contain 3 symbols or more'),
  body('password').isLength({ min: 4 }).withMessage('Password must contain 4 symbols or more')
    .matches(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,}$/, 'i').withMessage('Password must contain at least 1 number and 1 letter'),
  body('confirmPassword').custom((value, { req }) => {
    return value === req.body.password
  }).withMessage('Passwords should be the same'),
  body('firstName').isLength({ min: 3 }).withMessage('First name must contain 3 symbols or more'),
  body('lastName').isLength({ min: 3 }).withMessage('Last name must contain 3 symbols or more'),
  body('age').isInt({ min: 1 }).withMessage('Age must be a number and can\'t be zero'),
  userController.signup
)
router.get('/api/refresh', userController.refresh)
// router.post('/api/logout', userController.logout)
router.get('/api/projects', authMiddleware, springComponentsController.get)

module.exports = router
