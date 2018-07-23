'use strict'
const PostRepository = require('../repositories/post-repository')
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });


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

const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });



var repository;

class PostController{

    constructor(mongoose){
      
        repository = new PostRepository(mongoose)
      
    }
    async findAll(req,res){
        try {
            const data = await repository.find({})
            res.status(201).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
    async getById(req,res){
        try {
            const data = await repository.findById(req.params.id);
            res.status(201).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
    async create(req, res){
      try{
        const data = await repository.create(req.body);
        
        res.status(201).json({message: "data cadastrado com sucesso",data});
        site.map(site =>{
            const dataSite = new Site({...site, data: data._id});
            dataSite.save().then(site=>{
                data.site.push(site);
            });
        })
        autor.map(autor =>{
            const dataAutor = new Autor({...autor, data: data._id});
            posAautor.save().then(autor=>{
                data.autor.push(autor);
            });
        })
        await data.save();
      }catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Falha ao processar sua requisição'
        });
    }

    }
    async update(req, res){
        try{
             await repository.update(req.params.id, req.body);
             res.status(200).json({
                message: 'data atualizado com sucesso!'
            });
        } catch (e) {
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }
       
    }

    async delete(req, res){
        try {
            await repository.findByIdAndRemove(req.params.id)
            res.status(200).json({
                message: 'data removido com sucesso!'
            });
        } catch (e) {
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
}
module.exports = PostController;