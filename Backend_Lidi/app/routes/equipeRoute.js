const express = require('express')
const path = require('path')
const multer = require('multer')
const Router = express.Router()

const EquipeController = require('../controllers/equipeController')
const equipeController = new EquipeController()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './app/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `PHOTO_UPLOAD`)
    }
})

const upload = multer({storage})

Router.post('/create', equipeController.create())
Router.get('/read', equipeController.read())
Router.put('/update/:id', equipeController.update())
Router.delete('/delete/:id', equipeController.delete())
Router.get('/index/:id', equipeController.index())
Router.post('/verifica', equipeController.verificaCnpj())
Router.post('/upload/image', upload.single('url_logotipo'), equipeController.editPhoto())
Router.get('/profile/pic/:cnpj', equipeController.profilePic())

module.exports = Router // EXPORTANDO O CRUD DA EQUIPE DA APLICAÇÃO \\ 