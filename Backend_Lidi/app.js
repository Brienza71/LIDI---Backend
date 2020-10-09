const app = require('./app/config/express')
const server = require("http").Server(app());
require('dotenv').config()

server.listen(3000, () => {
    console.log(`SERVER RUNNING ON ${process.env.PORT}`)
})

//process.env.PORT,