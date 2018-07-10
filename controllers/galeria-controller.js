'use strict'

const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

var model;

class GaleriaController{

    constructor(app){

        app.get('/galerias', this.findAll);
        app.post('/galerias', upload.single('foto'),this.create);
        app.put('/galerias', this.update);
        app.delete('/galerias', this.remove);
        //this model recebe a coleção do banco de dados
        model = mongoose.model('Galeria');

    }
    async findAll(req, res){
        res.json (await model.find({}));
    }
    async create(req, res){
      try{
        let galeria = req.body;
        galeria.foto = req.file.path;
        const gal = await model.create(galeria);
        res.status(201).send({message: "Galeria cadastrado com sucesso",gal});
      }catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

    }
    async update(req, res){
        let galeria = req.body;
       
        res.json (await model.findOneAndUpdate({_id:galeria._id}, galeria));
    }
    async remove(req, res){
        let id = req.body._id;
        res.json (await model.remove({_id, id}));
    }
}
module.exports = GaleriaController;