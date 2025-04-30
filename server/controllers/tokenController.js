const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

exports.accessToken = null
exports.generateJwt = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
    expiresIn: '30m',
  })
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
    expiresIn: '30d',
  })
  return {
    accessToken,
    refreshToken,
  }
}

exports.saveToken = (token) => {
  this.accessToken = token
}

exports.validateAccessToken = (token) => {
  const userData = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
  return userData || null
}
exports.validateRefreshToken = (token) => {
  const userData = jwt.verify(token, process.env.REFRESH_SECRET_KEY)
  return userData || null
}
exports.refreshToken = async (req, res) => {
  //   const { username, password } = req.body
  //   const user = await User.findOne({ where: { username } })
  //   if (!user); // error
  //   const isPasswordCorrect = bcrypt.compareSync(password, user.password)
  //   if (!isPasswordCorrect); //error
  //   const token = generateJwt(user.id, user.username)
  //   res.status(200).json({ token })
}
