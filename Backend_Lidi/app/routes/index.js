const express = require('express');
const app = express();

// CARREGANDO E EXPORTANDO AS ROTAS DA APLICAÇÃO \\

const atletaRoute = require('./atletaRoute')
app.use('/atleta', atletaRoute)

const equipeRoute = require('./equipeRoute')
app.use('/equipe', equipeRoute)

const torneioRoute = require('./torneioRoute')
app.use('/torneio', torneioRoute)

const jogoRoute = require('./jogoRoute')
app.use('/jogo', jogoRoute)

const sessionRoute = require('./sessionRoute')
app.use('/session', sessionRoute)

module.exports = app