const Torneio = require('../models/torneio')

class TorneioDAO {

    create(torneio) {
        return new Promise((resolve, reject) => {
            Torneio.create({
                    nome: torneio.nome,
                    sub_nome: torneio.sub_nome,
                    tipo: torneio.tipo,
                    regulamento: torneio.regulamento,
                    patrocinador_gold: torneio.patrocinador_gold,
                    patrocinador_silver: torneio.patrocinador_silver
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método create torneio \\

    read() {
        return new Promise((resolve, reject) => {
            Torneio.findAll({
                    attributes: [
                        'id',
                        'nome',
                        'sub_nome',
                        'tipo',
                        'regulamento',
                        'patrocinador_gold',
                        'patrocinador_silver'
                    ]
                })
                .then(torneio => {
                    let torneios = []
                    torneio.forEach(torneio => {
                        torneios.push(torneio.dataValues)
                    })
                    resolve(torneios)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método read torneios \\

    update(torneio, id) {
        return new Promise((resolve, reject) => {
            Torneio.update({
                    nome: torneio.nome,
                    sub_nome: torneio.sub_nome,
                    tipo: torneio.tipo,
                    regulamento: torneio.regulamento,
                    patrocinador_gold: torneio.patrocinador_gold,
                    patrocinador_silver: torneio.patrocinador_silver
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


    } // Fim do método update torneio \\

    delete(id) {
        return new Promise((resolve, reject) => {
            Torneio.destroy({
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

    } // Fim do método delete torneio \\

    index(id) {
        return new Promise((resolve, reject) => {
            Torneio.findAll({
                    where: {
                        id: id
                    }
                })
                .then(torneio => {
                    resolve(torneio[0].dataValues)
                })
                .catch(err => reject(err))
        })

    } // Fim do método index torneio \\

}

module.exports = TorneioDAO

// REALIZANDO TESTES DE CONTROLE DO DAO \\

// const torneioDAO = new TORNEIODAO()

// torneioDAO.create({})

// torneioDAO.read()

// torneioDAO.index(1)

// torneioDAO.update({}, 1)

// torneioDAO.delete(1)