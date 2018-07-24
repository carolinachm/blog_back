'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Post{

    constructor(){

        const Post = new Schema({
            titulo: String,
            resumo: String,
            dataPublicacao: "",
            dataInclusao:"",
            cliques: "",
            foto: String,
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