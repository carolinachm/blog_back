'use strict'

const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


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



var model;

class GaleriaController{

    constructor(app){

        app.get('/galerias', this.findAll);
        app.post('/galerias', upload.single('foto'),this.create);
        app.put('/galerias', this.update);
        app.delete('/galerias', this.delete);
        
        model = mongoose.model('Galeria');

    }
    async findAll(req,res){
        res.json(await model.find({}));
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
        try{
             await model.update(req.params.id, {$set: req.body});
             res.status(200).send({
                message: 'Galeria atualizado com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
       
    }

    async delete(req, res){
        try {
            await model.remove(req.body.id)
            res.status(200).send({
                message: 'Galeria removido com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
}
module.exports = GaleriaController;