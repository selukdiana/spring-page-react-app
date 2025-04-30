const tokenController = require('../controllers/tokenController')
module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader); //unauthorized err
    const accessToken = authHeader.split(' ')[1]
    const userData = tokenController.validateAccessToken(accessToken)
    if (!userData); //unauth err
    req.user = userData
    next()
  } catch (err) {}
}
