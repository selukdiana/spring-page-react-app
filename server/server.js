const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const springComponents = require('./data')
const app = express()
const corsOptions = {
  origin: ['http://localhost:5173'],
}

app.use(cors(corsOptions))

app.get('/api/projects', (req, res) => {
  const filter = req.query.filter
  const filteredData = filter
    ? springComponents.filter((elem) =>
      elem.title.toLowerCase().includes(filter.toLowerCase())
    )
    : springComponents
  res.json(filteredData)
})

app.post('/api/auth', bodyParser.json(), (req, res) => {
  const { username, password } = req.body
  const isAuth = username === 'admin' && password === '1234' ? true : false
  if (!isAuth) {
    res.status(500).send("Incorrect value!");
  }
  res.json(isAuth)
})

app.listen(8080, () => {
  console.log('Server started on port 8080')
})
