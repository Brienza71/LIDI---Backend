const AtletaDAO = require('../DAO/atletaDAO')
const atletaDAO = new AtletaDAO()

const path = require('path')

const multer = require('multer')
const fs = require('fs')
const formidable = require('formidable')

class AtletaController {

    create() {
        return (req, res) => {
            let data = req.body
            atletaDAO.create(data)
                .then(result => {
                    res.json({
                        result: result,
                        status: 200
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Create Atleta \\

    read() {
        return (req, res) => {
            atletaDAO.read()
                .then(atletas => {
                    res.json({
                        status: 200,
                        atletas: atletas
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Read Atleta \\

    update() {
        return (req, res) => {
            let id = req.params.id
            let data = req.body
            atletaDAO.update(data, id)
                .then(result => {
                    res.json({
                        result: result,
                        status: 200
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Update Atleta \\

    delete() {
        return (req, res) => {
            let id = req.params.id
            atletaDAO.delete(id)
                .then(result => {
                    res.json({
                        result: result,
                        status: 200
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Delete Atleta \\

    index() {
        return (req, res) => {
            let id = req.params.id
            atletaDAO.index(id)
                .then(atleta => {
                    res.json({
                        status: 200,
                        atleta: atleta
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Index Atleta \\

    verificaCpf() {
        return (req, res) => {
            let data = req.body
            let cpf = data.cpf
            atletaDAO.verificaCpf(cpf)
                .then(result => {
                    res.json({
                        status: 200,
                        result: result
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err,
                    })
                })
        }
    } // Fim do método Verificar Cpf Atleta \\

    editPhoto() {
            return function (req, res) {    
                //transformar o form para ser compatível com formidable
                    const cpf = req.body.cpf
                    let oldPath = req.file.path //photo -> nome campo no html
                    let ext = req.file.mimetype //pega a extenção do arquivo
                    let nome = `photo_atleta_cpf_${cpf}.jpeg` //nome padrão para a photo
                    
                    if ((ext == 'image/jpg' || ext == 'image/png' || ext == 'image/jpeg')) {
                        //caminho relativo, que irá para o banco
                        let path = `/uploads/${nome}`
                        //caminho "completo" para o sistema de arquivos
                        let fullPath = './app' + path
    
                        //move o arquivo da memória para o disco (caminho do projeto)
                        fs.rename(oldPath, fullPath, (err) => {
                            if (err) {
                                res.json({
                                    err: err,
                                    status: 500
                                })
                            } else {
                                atletaDAO.editPhoto(path, cpf)
                                    .then(() => {
                                        res.json({
                                            status: 200,
                                            path: path
                                        })
                                        return res
                                    }).catch(err => {
                                        res.json({
                                            status: 500,
                                            err: err
                                        })
                                    })
                            }
                        })
                    } else {
                        res.json({
                            status: 200,
                            err: 'Imagem Maior que o Permitido (2mb)'
                        })
                    }
                }   
    } // Fim do método EditarPhoto \\

    profilePic() {
        return function (req, res) {
            let cpf = req.params.cpf;
            atletaDAO.profilePic(cpf)
                .then(path => {
                    res.sendFile(__dirname.split('\controllers')[0] + path)
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Profile Pic \\

}

module.exports = AtletaController