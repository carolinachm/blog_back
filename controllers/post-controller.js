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

    constructor(app){

        app.get('/posts', this.findAll);
        // app.get('/posts/:_id', this.findById);
        app.post('/posts', upload.single('foto'),this.create);
        app.put('/posts', this.update);
        app.delete('/posts', this.delete);
        
        model = mongoose.model('Post');
        model = mongoose.model('Site');
        model = mongoose.model('Autor');

    }
    async findAll(req,res){
        try {
            const post = await model.find({})
            res.status(201).json({post});
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
    // async getById(req,res){
    //     try {
    //         const post = await model.findById(req.params.post._id);
    //         res.status(201).json({post});
    //     } catch (e) {
    //         console.log(e);
    //         res.status(500).json({
    //             message: 'Falha ao processar sua requisição'
    //         });
    //     }
    // }
    async create(req, res){
      try{
        const post = await model.create(req.body);
        post.foto = req.body.foto;
         post.autor = req.body.autor;
         post.site = req.body.site;
        res.status(201).json({message: "post cadastrado com sucesso",post});
        site.map(site =>{
            const postSite = new Site({...site, post: post._id});
            postSite.save().then(site=>{
                post.site.push(site);
            });
        })
        autor.map(autor =>{
            const postAutor = new Autor({...autor, post: post._id});
            posAautor.save().then(autor=>{
                post.autor.push(autor);
            });
        })
        await post.save();
      }catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Falha ao processar sua requisição'
        });
    }

    }
    async update(req, res){
        try{
             await model.update(req.params.id, {$set: req.body});
             res.status(200).json({
                message: 'post atualizado com sucesso!'
            });
        } catch (e) {
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }
       
    }

    async delete(req, res){
        try {
            await model.findByIdAndRemove(req.params.id)
            res.status(200).json({
                message: 'post removido com sucesso!'
            });
        } catch (e) {
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
}
module.exports = PostController;