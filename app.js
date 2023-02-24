const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')

const middleware = require('./utils/middleware')

app.use(cors())
app.use('/', express.static('build'))
app.use('/about', express.static('build'))
app.use('/studies', express.static('build'))
app.use('/projects', express.static('build'))
app.use('/activities', express.static('build'))

app.use(express.json())

if(process.env.NODE_ENV === 'development')
  app.use(middleware.requestLogger)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app