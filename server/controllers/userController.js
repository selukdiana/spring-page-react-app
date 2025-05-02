const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const tokenController = require('../controllers/tokenController')
const { validationResult } = require('express-validator')

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })
    if (!user) throw new Error()
    const isPasswordCorrect = bcrypt.compareSync(password, user.password)
    if (!isPasswordCorrect) throw new Error()
    const tokens = tokenController.generateJwt({
      id: user.id,
      username: user.username,
    })
    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 10 * 60 * 1000,
      httpOnly: true,
    })
    return res.status(200).json({ accessToken: tokens.accessToken, username })
  } catch (err) {
    return res.status(400).send(err)
  }
}

exports.signup = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { firstName, lastName, age, username, password } = req.body
    const isUserExist = await User.findOne({ where: { username } })
    if (isUserExist) throw new Error()
    const hashPassword = await bcrypt.hash(password, 5)
    await User.create({
      firstName,
      lastName,
      username,
      age,
      password: hashPassword,
    })
    return res.status(201).json({ username })
  } catch (err) {
    return res.status(400).send(err)
  }

}

exports.refresh = (req, res) => {
  try {
    const { refreshToken } = req.cookies
    if (!refreshToken) throw new Error()
    const userData = tokenController.validateRefreshToken(refreshToken)
    if (!userData) throw new Error()
    const tokens = tokenController.generateJwt({
      id: userData.id,
      username: userData.username,
    })
    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 10 * 60 * 1000,
      httpOnly: true,
    })
    res
      .status(200)
      .json({ accessToken: tokens.accessToken, username: userData.username })
  } catch (err) {
    res.status(401).send(err)
  }
}

// exports.logout = (req, res, next) => {
//   try {
//     const { refreshToken } = req.cookies
//     tokenController.refreshToken = null
//     res.clearCookie('refreshToken')
//     return res.json(tokenController.refreshToken)
//   } catch (e) {
//     next(e)
//   }
// }
