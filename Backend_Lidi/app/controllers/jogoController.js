const JogoDAO = require('../DAO/jogoDAO')
const jogoDAO = new JogoDAO()

class JogoController {

    create() {
        return (req, res) => {
            let data = req.body
            jogoDAO.create(data)
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
    } // Fim do método Create Jogo \\

    read() {
        return (req, res) => {
            jogoDAO.read()
                .then(jogos => {
                    res.json({
                        status: 200,
                        jogos: jogos
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Read Jogo \\

    update() {
        return (req, res) => {
            let id = req.params.id
            let data = req.body
            jogoDAO.update(data, id)
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
    } // Fim do método Update Jogo \\

    delete() {
        return (req, res) => {
            let id = req.params.id
            jogoDAO.delete(id)
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
    } // Fim do método Delete Jogo \\

    index() {
        return (req, res) => {
            let id = req.params.id
            jogoDAO.index(id)
                .then(jogo => {
                    res.json({
                        status: 200,
                        jogo: jogo
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Index Jogo \\

}

module.exports = JogoController