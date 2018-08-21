'use strict'

const mongoose = require('mongoose');

class Usuario extends mongoose.Schema{
    constructor() {

        super({
            nome: String
        })
        
        mongoose.model('Usuario', Usuario)
    }

}
module.exports = Usuario;