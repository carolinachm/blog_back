'use strict'

const mongoose = require('mongoose');
const multer = require('multer');
 const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
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

// const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
//   });



var model;

class PostController{

    constructor(){

       
        model = mongoose.model('Post');
        model = mongoose.model('Site');
        model = mongoose.model('Autor');

    }
    async findAll(req,res){
        
        res.json(await model.find());
    }
    // async getById(req,res){
    //     try {
    //         const post = await model.findById(req.params.id);
    //         res.status(201).send({post});
    //     } catch (e) {
    //         console.log(e);
    //         res.status(500).send({
    //             message: 'Falha ao processar sua requisição'
    //         });
    //     }
    // }
    async create(req, res){
        console.log('Salvando post');
        let post = req.body;
        res.json(await model.create(post));
        console.log(req.body);

    }
    async update(req, res){
        console.log("Atualizando o poste...");
        let post = req.body;
        res.json(await model.findByIdAndUpdate(req.params.id));
        console.log(req.body)
    }

    async delete(req, res){
        console.log("Deletando o poste...");
        let id = req.body._id;
        res.json(await model.findByIdAndRemove(req.params.id));
    }
}
module.exports = PostController;