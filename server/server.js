const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const sequelize = require('./config/db')
const router = require('./routes')
const path = require('path')
const springComponents = require('./data')

const app = express()

app.use(express.json())
app.use(cookieParser())
const corsOptions = {
  origin: ['http://localhost:5173'],
}
app.use(cors(corsOptions))

app.use(router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(8080, () => {
      console.log('Server started on port 8080')
    })
  } catch (err) {
    console.log(err)
  }
}

start()
