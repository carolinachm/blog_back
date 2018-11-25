'use strict'

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

class UsuarioService{

    static async findAll(obj){
        return await Usuario.find(obj);
    }
    static async getById(id){
        return await Usuario.findById(id);
    }
    static async create(usuario){
        return await Usuario.create(usuario);
    }
    static async update(usuario){
        return await Usuario.findByIdAndUpdate(req.params.id);
    }
    static async remove(Usuario){
        return await Usuario.findByIdAndRemove(req.params.id);
    }
    static async getUserByExternalId(provider, id) {
        return await usuario.find((u) =>
            u.providers.findIndex((p) => p.provider == provider && p.id == id) >= 0);
    }
}
module.exports = UsuarioService;