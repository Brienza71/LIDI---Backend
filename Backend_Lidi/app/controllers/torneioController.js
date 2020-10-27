const TorneioDAO = require('../DAO/torneioDAO')
const torneioDAO = new TorneioDAO()

class TorneioController {

    create() {
        return (req, res) => {
            let data = req.body
            torneioDAO.create(data)
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
    } // Fim do método Create Torneio \\

    read() {
        return (req, res) => {
            torneioDAO.read()
                .then(torneios => {
                    res.json({
                        status: 200,
                        torneios: torneios
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Read Torneio \\

    update() {
        return (req, res) => {
            let id = req.params.id
            let data = req.body
            torneioDAO.update(data, id)
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
    } // Fim do método Update Torneio \\

    delete() {
        return (req, res) => {
            let id = req.params.id
            torneioDAO.delete(id)
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
    } // Fim do método Delete Torneio \\

    index() {
        return (req, res) => {
            let id = req.params.id
            torneioDAO.index(id)
                .then(torneio => {
                    res.json({
                        status: 200,
                        torneio: torneio
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Index Torneio \\

}

module.exports = TorneioController