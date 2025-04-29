const pool = require('../config/db')
const jwt = require('jsonwebtoken')

exports.getUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const result = await pool.query(
      'SELECT * FROM users WHERE user_name = $1',
      [username]
    )
    console.log(result.rows)
    if (!result.rows.length) res.status(401).send('Username is incorrect!')
    const isPasswordValid = password === result.rows[0].user_password
    if (!isPasswordValid) res.status(401).send('Password is incorrect!')
    res.status(200).json('Success!')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.createUser = async (req, res) => {
  // const { username, password } = req.body
  // try {
  //   const result = await pool.query(
  //     'INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *',
  //     [username, password]
  //   )
  //   res.status(201).json(result.rows[0])
  // } catch (err) {
  //   res.status(500).json({ error: err.message })
  // }
}
