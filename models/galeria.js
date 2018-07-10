'use strict'

const mongoose = require('mongoose');

class Galeria{
    constructor(){
        mongoose.model('Galeria',{
            descricao: String,
            foto:String
        })
    }
}
module.exports = Galeria;