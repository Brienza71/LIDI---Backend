const Jogo = require('../models/jogo')

class JogoDAO {

    create(jogo) {
        return new Promise((resolve, reject) => {
            Jogo.create({
                    data: jogo.data,
                    tempo: jogo.tempo,
                    observacoes: jogo.observacoes,
                    pontuacao_A: jogo.pontuacao_A,
                    pontuacao_B: jogo.pontuacao_B,
                    cartao_vermelho_A: jogo.cartao_vermelho_A,
                    cartao_vermelho_B: jogo.cartao_vermelho_B,
                    cartao_amarelo_A: jogo.cartao_amarelo_A,
                    cartao_amarelo_B: jogo.cartao_amarelo_B,
                    id_torneio: jogo.id_torneio,
                    id_time_A: jogo.id_time_A,
                    id_time_B: jogo.id_time_B
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método create jogo \\

    read() {
        return new Promise((resolve, reject) => {
            Jogo.findAll({
                    attributes: [
                        'id',
                        'data',
                        'tempo',
                        'observacoes',
                        'pontuacao_A',
                        'pontuacao_B',
                        'cartao_vermelho_A',
                        'cartao_vermelho_B',
                        'cartao_amarelo_A',
                        'cartao_amarelo_B',
                        'id_torneio',
                        'id_time_A',
                        'id_time_B'
                    ]
                })
                .then(jogo => {
                    let jogos = []
                    jogo.forEach(jogo => {
                        jogo.dataValues['data'] = jogo.dataValues['data'].split('-').reverse().join('/')
                        jogos.push(jogo.dataValues)
                    })
                    resolve(jogos)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método read jogos \\

    update(jogo, id) {
        return new Promise((resolve, reject) => {
            Jogo.update({
                    data: jogo.data,
                    tempo: jogo.tempo,
                    observacoes: jogo.observacoes,
                    pontuacao_A: jogo.pontuacao_A,
                    pontuacao_B: jogo.pontuacao_B,
                    cartao_vermelho_A: jogo.cartao_vermelho_A,
                    cartao_vermelho_B: jogo.cartao_vermelho_B,
                    cartao_amarelo_A: jogo.cartao_amarelo_A,
                    cartao_amarelo_B: jogo.cartao_amarelo_B,
                    id_torneio: jogo.id_torneio,
                    id_time_A: jogo.id_time_A,
                    id_time_B: jogo.id_time_B
                }, {
                    where: {
                        id: id
                    }
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => reject(err))
        })


    } // Fim do método update jogo \\

    delete(id) {
        return new Promise((resolve, reject) => {
            Jogo.destroy({
                    where: {
                        id: id
                    }
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método delete jogo \\

    index(id) {
        return new Promise((resolve, reject) => {
            Jogo.findAll({
                    where: {
                        id: id
                    }
                })
                .then(jogo => {
                    resolve(jogo[0].dataValues)
                })
                .catch(err => reject(err))
        })

    } // Fim do método index jogo \\

}

module.exports = JogoDAO

// REALIZANDO TESTES DE CONTROLE DO DAO \\

// const jogoDAO = new JOGODAO()

// jogoDAO.create({})

// jogoDAO.read()

// jogoDAO.index(1)

// jogoDAO.update({}, 1)

// jogoDAO.delete(1)