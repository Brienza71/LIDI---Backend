const Atleta = require('../models/atleta');
const Equipe = require('../models/equipe');


class AtletaDAO {

    create(atleta) {
        return new Promise((resolve, reject) => {
            Atleta.create({
                    cpf: atleta.cpf,
                    nome: atleta.nome,
                    rg: atleta.rg,
                    data_nasc: atleta.data_nasc,
                    email: atleta.email,
                    telefone: atleta.telefone,
                    celular: atleta.celular,
                    endereco: atleta.endereco,
                    cidade: atleta.cidade,
                    estado: atleta.estado,
                    foto: atleta.foto,
                    nome_responsavel: atleta.nome_responsavel,
                    cpf_responsavel: atleta.cpf_responsavel,
                    telefone_responsavel: atleta.telefone_responsavel,
                    celular_responsavel: atleta.celular_responsavel,
                    id_equipe: atleta.id_equipe
                    
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método create atleta \\

    read() {
        return new Promise((resolve, reject) => {
            Equipe.hasMany(Atleta, {foreignKey: 'id'})
            Atleta.belongsTo(Equipe, {foreignKey: 'id'})

            Atleta.findAll({
                    attributes: [
                        'id',
                        'cpf',
                        'nome',
                        'rg',
                        'data_nasc',
                        'email',
                        'telefone',
                        'celular',
                        'endereco',
                        'cidade',
                        'estado',
                        'foto',
                        'nome_responsavel',
                        'cpf_responsavel',
                        'telefone_responsavel',
                        'celular_responsavel',
                        'id_equipe'
                    ],
                    include: [Equipe],
                    // order: [['id', 'name']]
                })
                .then(atleta => {
                    console.log(atleta)
                    let atletas = []
                    atleta.forEach(atleta => {
                        atleta.dataValues['data_nasc'] = atleta.dataValues['data_nasc'].split('-').reverse().join('/')
                        atletas.push(atleta.dataValues)
                    })
                    resolve(atletas)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })

    } // Fim do método read atleta \\

    update(atleta, id) {
        return new Promise((resolve, reject) => {
            Atleta.update({
                    cpf: atleta.cpf,
                    nome: atleta.nome,
                    rg: atleta.rg,
                    data_nasc: atleta.data_nasc,
                    email: atleta.email,
                    telefone: atleta.telefone,
                    celular: atleta.celular,
                    endereco: atleta.endereco,
                    cidade: atleta.cidade,
                    estado: atleta.estado,
                    foto: atleta.foto,
                    nome_responsavel: atleta.nome_responsavel,
                    cpf_responsavel: atleta.cpf_responsavel,
                    telefone_responsavel: atleta.telefone_responsavel,
                    celular_responsavel: atleta.celular_responsavel,
                    id_equipe: atleta.id_equipe
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


    } // Fim do método update atleta \\

    delete(id) {
        return new Promise((resolve, reject) => {
            Atleta.destroy({
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

    } // Fim do método delete atleta \\

    index(id) {
        return new Promise((resolve, reject) => {
            Atleta.findAll({
                    where: {
                        id: id
                    }
                })
                .then(atleta => {
                    resolve(atleta[0].dataValues)
                })
                .catch(err => reject(err))
        })

    } // Fim do método index atleta \\

    verificaCpf(cpf) {
        return new Promise((resolve, reject) => {
            Atleta.count({
                    where: {
                        cpf: cpf
                    }
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => reject(err))
        })
    } // Fim do método verifica cpf \\

    editPhoto(path, cpf) {
        return new Promise((resolve, reject) => {
            Atleta.update({
                    foto: path
                }, {
                    where: {
                        cpf: cpf
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

    profilePic(cpf) {
        return new Promise((resolve, reject) => {
            Atleta.findAll({
                    where: {
                        cpf: cpf,
                    }
                })
                .then(path => {
                    resolve(path[0]['dataValues']['foto'])
                })
                .catch(err => {
                    reject(err)
                })
        })
    } // Fim do método profile pic \\
}

module.exports = AtletaDAO

// REALIZANDO TESTES DE CONTROLE DO DAO \\

// const atletaDAO = new AtletaDAO()

// atletaDAO.create({
//     cpf: "123.456.789-10",
//     nome: "Maria",
//     data_nasc: "2002-12-25",
//     email: "email@email",
//     telefone: "333-333",
//     celular: "999-999",
//     endereco: "Rua Jose Meleto",
//     cidade: "Sao Paulo",
//     estado: "Sao Paulo",
//     foto: "C:/file"
// })

// atletaDAO.read()

// atletaDAO.index(1)

// atletaDAO.update({
//     cpf: "123.456.789-10",
//     nome: "Mario",
//     data_nasc: "2002-12-25",
//     email: "email@email",
//     telefone: "333-333",
//     celular: "999-999",
//     endereco: "Rua Jose Meleto",
//     cidade: "Sao Paulo",
//     estado: "Sao Paulo",
//     foto: "C:/file"
// }, 1)

// atletaDAO.profilePic('123.456.789-10')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// atletaDAO.delete(1)