const tokenController = require('../controllers/tokenController')
module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) throw new Error()
    const accessToken = authHeader.split(' ')[1]
    const userData = tokenController.validateAccessToken(accessToken)
    if (!userData) throw new Error()
    req.user = userData
    next()
  } catch (err) {
    res.status(401).send('Unauthorized')
  }
}
