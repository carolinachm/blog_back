'use Strict'
const mongoose = require('mongoose')

class Autor{
    constructor(){
        mongoose.model('Autor',{

            nome: String,
            email: String
        })
    }
}
module.exports = Autor;