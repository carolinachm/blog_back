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

<<<<<<< HEAD:controllers/blog-controller.js
class BlogController {
=======
class GaleriaController{
>>>>>>> 7ede0c793ca08bf9a8681caddbbdff5171102dbb:controllers/galeria-controller.js

    constructor(app){

<<<<<<< HEAD:controllers/blog-controller.js
        app.get('/blogs', this.findAll);
        app.post('/blogs', upload.single('foto'), this.create);
        app.put('/blogs', this.update);
        app.delete('/blogs', this.delete);

        model = mongoose.model('Blog');
=======
        app.get('/galerias', this.findAll);
        app.post('/galerias', upload.single('foto'),this.create);
        app.put('/galerias', this.update);
        app.delete('/galerias', this.delete);
        
        model = mongoose.model('Galeria');
>>>>>>> 7ede0c793ca08bf9a8681caddbbdff5171102dbb:controllers/galeria-controller.js

    }
    async findAll(req,res){
        res.json(await model.find({}));
    }
<<<<<<< HEAD:controllers/blog-controller.js
    async create(req, res) {
        let blog = req.body;
        blog.foto = req.file.path;
        try {
            const blo = await model.create(blog);
            res.status(201).send({ message: "Blog cadastrado com sucesso", blo });
        } catch (e) {
            console.log(e);
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }



    }
    async update(req, res) {
        try {
            await model.update(req.params.id, req.body);
            res.status(200).send({
                message: 'blog atualizado com sucesso!'
=======
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
>>>>>>> 7ede0c793ca08bf9a8681caddbbdff5171102dbb:controllers/galeria-controller.js
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
                message: 'blog removido com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
}
module.exports = BlogController;