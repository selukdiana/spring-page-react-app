const jwt = require('jsonwebtoken')

exports.generateJwt = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
    expiresIn: '1m',
  })
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
    expiresIn: '10m',
  })
  return {
    accessToken,
    refreshToken,
  }
}

exports.validateAccessToken = (token) => {
  const userData = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
  return userData || null
}
exports.validateRefreshToken = (token) => {
  const userData = jwt.verify(token, process.env.REFRESH_SECRET_KEY)
  return userData || null
}
