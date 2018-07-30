'use strict'

const mongoose = require('mongoose');

class Autor {
    constructor() {
        mongoose.model('Autor', {
                    id: "",
                    nome: String
        })
    }

}
module.exports = Autor;