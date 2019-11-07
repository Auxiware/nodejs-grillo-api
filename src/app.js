const express = require('express')
const morgan = require('morgan')
// cors import
const cors = require('cors')
// routes import
const routes = require('./routes').Router

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// morgan logs
app.use(morgan('dev'))
// cors config
app.use(cors())
// routes config
app.use(routes)

// exporting the app
exports.App = app