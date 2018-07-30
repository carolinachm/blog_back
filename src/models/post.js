'use strict'

const mongoose = require('mongoose');


class Post {
    constructor() {
        mongoose.model('Post', {
            id: "",
            titulo: String,
            resumo: String,
            dataPublicacao: "",
            dataInclusao:"",
            cliques: "",
            foto: String,
            site: {
                id: "",
                nome: String,
                url: String,
                autor: {
                    id: "",
                    nome: String
                }
            }
        })
    }

}
module.exports = Post;