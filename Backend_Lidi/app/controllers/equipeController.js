const EquipeDAO = require('../DAO/equipeDAO')
const equipeDAO = new EquipeDAO()

const fs = require('fs')
const formidable = require('formidable')

class EquipeController {

    create() {
        return (req, res) => {
            let data = req.body
            equipeDAO.create(data)
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
    } // Fim do método Create Equipe \\

    read() {
        return (req, res) => {
            equipeDAO.read()
                .then(equipes => {
                    res.json({
                        status: 200,
                        equipes: equipes
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Read Equipe \\

    update() {
        return (req, res) => {
            let id = req.params.id
            let data = req.body
            equipeDAO.update(data, id)
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
    } // Fim do método Update Equipe \\

    delete() {
        return (req, res) => {
            let id = req.params.id
            equipeDAO.delete(id)
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
    } // Fim do método Delete Equipe \\

    index() {
        return (req, res) => {
            let id = req.params.id
            equipeDAO.index(id)
                .then(equipe => {
                    res.json({
                        status: 200,
                        equipe: equipe
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Index Equipe \\

    verificaCnpj() {
        return (req, res) => {
            let data = req.body
            let cnpj = data.cnpj
            equipeDAO.verificaCnpj(cnpj)
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
    } // Fim do método Verificar Cnpj Equipe \\

    editPhoto() {
        return function (req, res) {
            //transformar o form para ser compatível com formidable
                const cnpj = req.body.cnpj
                let oldPath = req.file.path //photo -> nome campo no html
                let ext = req.file.mimetype //pega a extenção do arquivo
                let nome = `logo_equipe_cnpj_${cnpj}.jpeg` //nome padrão para a photo

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
                            equipeDAO.editPhoto(path, cnpj)
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
            let cnpj = req.params.cnpj;
            equipeDAO.profilePic(cnpj)
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

module.exports = EquipeController