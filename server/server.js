const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const pool = require('./config/db')
const router = require('./routes')
const path = require('path')
const springComponents = require('./data')
const app = express()

const corsOptions = {
  origin: ['http://localhost:5173'],
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use(router)

app.listen(8080, () => {
  console.log('Server started on port 8080')
})
