'use strict'

const Usuario = require ('../models/usuario');

class UsuarioRepository{

    constructor(usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    async findAll(){
        const usuario = await this.usuarioRepository.find({})
        return usuario;
    }
    async findById(id){
        const usuario = await this.usuarioRepository.findById(id);
        return usuario;
    }
    async create(data){
        var usuario = new usuario(data);
        const po = await this.usuarioRepository.save({usuario:this.model});
        return po;
    }
    async update(id, data){
        await findByIdAndUpdate(id,req.body)
    }
    async delete(id){
        await findByIdAndRemove(id)
    }
}
module.exports = UsuarioRepository;