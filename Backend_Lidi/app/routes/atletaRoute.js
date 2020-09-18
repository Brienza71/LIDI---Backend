const express = require('express')
const path = require('path')
const multer = require('multer')
const Router = express.Router()

const AtletaController = require('../controllers/atletaController')
const atletaController = new AtletaController()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './app/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `PHOTO_UPLOAD`)
    }
})

const upload = multer({storage})

Router.post('/create', atletaController.create())
Router.get('/read', atletaController.read())
Router.put('/update/:id', atletaController.update())
Router.delete('/delete/:id', atletaController.delete())
Router.get('/index/:id', atletaController.index())
Router.post('/verifica', atletaController.verificaCpf())
Router.post('/upload/image', upload.single('photo'), atletaController.editPhoto())
Router.get('/profile/pic/:cpf', atletaController.profilePic())

module.exports = Router // EXPORTANDO O CRUD DO ATLETA DA APLICAÇÃO \\ 