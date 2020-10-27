const express = require('express')
const Router = express.Router()

const TorneioController = require('../controllers/torneioController')
const torneioController = new TorneioController()

Router.post('/create', torneioController.create())
Router.get('/read', torneioController.read())
Router.put('/update/:id', torneioController.update())
Router.delete('/delete/:id', torneioController.delete())
Router.get('/index/:id', torneioController.index())

module.exports = Router // EXPORTANDO O CRUD DO TORNEIO DA APLICAÇÃO \\ 