'use strict'
const mongoose = require('mongoose');

class Post extends mongoose.Schema{

    constructor(){

        super({
            titulo: {type: String},
            resumo: {type: String},
            dataPublicacao: {type: Date(), default: Date.now},
            dataInclusao:{type: Date(), default: Date.now},
            cliques: {type: String},
            foto: {type: String},
            site: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Site',
                require: true
            },
            autor:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Usuario',
                require:true
            }
        })

    
        mongoose.model('Post', Post);
    }
}
module.exports = Post;