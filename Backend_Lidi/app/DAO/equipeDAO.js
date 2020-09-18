const Equipe = require('../models/equipe')

class EquipeDAO {

    create(equipe) {
        return new Promise((resolve, reject) => {
            Equipe.create({
                    cnpj: equipe.cnpj,
                    nome: equipe.nome,
                    empresa: equipe.empresa,
                    logotipo: equipe.logotipo,
                    responsavel: equipe.responsavel,
                    telefone_responsavel: equipe.telefone_responsavel,
                    email_responsavel: equipe.email_responsavel,
                    tecnico: equipe.tecnico,
                    auxTecnico: equipe.auxTecnico,
                    massagista: equipe.massagista
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método create equipe \\

    read() {
        return new Promise((resolve, reject) => {
            Equipe.findAll({
                    attributes: [
                        'id',
                        'cnpj',
                        'nome',
                        'empresa',
                        'logotipo',
                        'responsavel',
                        'telefone_responsavel',
                        'email_responsavel',
                        'tecnico',
                        'auxTecnico',
                        'massagista'
                    ]
                })
                .then(equipe => {
                    let equipes = []
                    equipe.forEach(equipe => {
                        equipes.push(equipe.dataValues)
                    })
                    resolve(equipes)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método read equipe \\

    update(equipe, id) {
        return new Promise((resolve, reject) => {
            Equipe.update({
                    cnpj: equipe.cnpj,
                    nome: equipe.nome,
                    empresa: equipe.empresa,
                    logotipo: equipe.logotipo,
                    responsavel: equipe.responsavel,
                    telefone_responsavel: equipe.telefone_responsavel,
                    email_responsavel: equipe.email_responsavel,
                    tecnico: equipe.tecnico,
                    auxTecnico: equipe.auxTecnico,
                    massagista: equipe.massagista
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


    } // Fim do método update equipe \\

    delete(id) {
        return new Promise((resolve, reject) => {
            Equipe.destroy({
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

    } // Fim do método delete equipe \\

    index(id) {
        return new Promise((resolve, reject) => {
            Equipe.findAll({
                    where: {
                        id: id
                    }
                })
                .then(equipe => {
                    resolve(equipe[0].dataValues)
                })
                .catch(err => reject(err))
        })

    } // Fim do método index equipe \\

    verificaCnpj(cnpj) {
        return new Promise((resolve, reject) => {
            Equipe.count({
                    where: {
                        cnpj: cnpj
                    }
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => reject(err))
        })
    } // Fim do método verifica cnpj \\

    editPhoto(path, cnpj) {
        return new Promise((resolve, reject) => {
            Equipe.update({
                    logotipo: path
                }, {
                    where: {
                        cnpj: cnpj
                    }
                })
                .then(result => {
                    console.log(result);
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método edit photo \\

    profilePic(cnpj) {
        return new Promise((resolve, reject) => {
            Equipe.findAll({
                    where: {
                        cnpj: cnpj,
                    }
                })
                .then(path => {
                    resolve(path[0]['dataValues']['logotipo'])
                })
                .catch(err => {
                    reject(err)
                })
        })
    } // Fim do método profile pic \\
}

module.exports = EquipeDAO

// REALIZANDO TESTES DE CONTROLE DO DAO \\

// const equipeDAO = new EquipeDAO()

// equipeDAO.create({
//     cnpj : "13.339.532/0001-09",
//     nome : "TCC F.C",
//     empresa : "Palmares",
//     logotipo : "/./../.../..../...../",
//     responsavel : "Dirceu Soares",
//     telefoneResp : "19 9999-999",
//     emailResp : "dirceu@dirceu.com",
//     tecnico : "dirceuTEC",
//     auxTecnico : "dirceuAUX",
//     massagista : "dirceuMAS"
// })

// equipeDAO.read()

// equipeDAO.index(1)

// equipeDAO.update({
//     cnpj : "13.339.532/0001-09",
//     nome : "TCC F.C",
//     empresa : "Palmares",
//     logotipo : "/./../.../..../...../",
//     responsavel : "Dirceu2 Soares",
//     telefoneResp : "19 9999-999",
//     emailResp : "dirceu@dirceu.com",
//     tecnico : "dirceuTEC",
//     auxTecnico : "dirceuAUX",
//     massagista : "dirceuMAS"
// }, 1)

// equipeDAO.profilePic('13.339.532/0001-09')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// equipeDAO.delete(1)