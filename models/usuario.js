'use strict';
const mongoose = require('mongoose');

class Usuario{

    constructor(){

        const UsuarioSchema = new mongoose.Schema({
            nome: String,
            posts: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Post'
            }]
          })
          mongoose.model('Usuario', UsuarioSchema);
    }
}
module.exports = Usuario;