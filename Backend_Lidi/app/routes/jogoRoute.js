const express = require('express')
const Router = express.Router()

const JogoController = require('../controllers/jogoController')
const jogoController = new JogoController()

Router.post('/create', jogoController.create())
Router.get('/read', jogoController.read())
Router.put('/update/:id', jogoController.update())
Router.delete('/delete/:id', jogoController.delete())
Router.get('/index/:id', jogoController.index())

module.exports = Router // EXPORTANDO O CRUD DO JOGO DA APLICAÇÃO \\ 