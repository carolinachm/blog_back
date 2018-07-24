'use strict'

const UsuarioRepository = require('../repositories/usuario-repository')
var repository;

class UsuarioController {

    constructor(mongoose){
      
        repository = new UsuarioRepository(mongoose)
      
    }
    async findAll(req, res){
        res.json(await repository.find());
    }
    async findOne(req,res){
        res.josn (await repository.findOne({nome : nome}).populate('posts'));
    }

    async create(req, res){
        console.log(req.body);
        let usuario = req.body;
        res.json(await repository.create(usuario));
    }

    async update(req, res){
        let usuario = req.body;
        res.json(await repository.update({_id: usuario._id}, usuario));
    }

    async remove(req, res){
        console.log("Deletando o usuario...");
        let id = req.body._id;
        res.json(await repository.remove({_id: id}));
    }
}
module.exports = UsuarioController;