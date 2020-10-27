const express = require('express')
const Router = express.Router()

// Routes of Server to Session \\
const session = require('../controllers/sessionController')

// Routes of forms \\
Router.post('/login', session)


module.exports = Router;