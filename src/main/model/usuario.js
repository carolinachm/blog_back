'use strict'

const mongoose = require('mongoose');

class Usuario extends mongoose.Schema{
    constructor() {

        super({
            nome: {type:String},
            senha:{type: String}
        })
        
        mongoose.model('Usuario',this)
    }

}
module.exports = Usuario;