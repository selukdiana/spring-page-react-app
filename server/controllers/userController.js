const pool = require('../config/db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const tokenController = require('../controllers/tokenController')

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })
    if (!user) throw new Error('Wrong username!')
    const isPasswordCorrect = bcrypt.compareSync(password, user.password)
    if (!isPasswordCorrect) throw new Error('Wrong password!')
    const tokens = tokenController.generateJwt({
      id: user.id,
      username: user.username,
    })
    tokenController.saveToken(tokens.accessToken)
    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })
    return res.status(201).json({ accessToken, username })
  } catch (err) {
    return res.status(400).send(err)
  }
}

exports.signup = async (req, res) => {
  const { firstName, lastName, age, username, password } = req.body
  const isUserExist = await User.findOne({ where: { username } })
  if (isUserExist) res.status(404).send('is Exist')
  const hashPassword = await bcrypt.hash(password, 5)
  await User.create({
    firstName,
    lastName,
    username,
    age,
    password: hashPassword,
  })
  return res.status(201).json({ username })
}

exports.refresh = (req, res) => {
  try {
    const { refreshToken } = req.cookies
    if (!refreshToken); //err
    const userData = tokenController.validateRefreshToken(refreshToken)
    const tokens = tokenController.generateJwt(userData)
    tokenController.saveToken(tokens.accessToken)
    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })
    return res.status(201).json({ accessToken, username: userData.username })
  } catch (err) {}
}
