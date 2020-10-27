const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('../routes/index')

module.exports = function () {
    // <-----------------------CONFIGS----------------------------> \\
    // Express \\
    const app = express()

    // Cors \\
    app.use(cors())

    // BodyParser \\
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(bodyParser.json())

    // Routes \\
    app.get('/teste', (req, res) => {
        res.json({test:'hfbdbg'})
    })
    app.use('/', routes)

    return app
}