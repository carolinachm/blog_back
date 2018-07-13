'use strict'

const mongoose = require('mongoose');

class Blog{
    constructor(){
        mongoose.model('Blog',{
             nome: String,
             foto:String ,
             autor:{
                 type: mongoose.Schema.Types.ObjectId,
                 ref: 'Autor',
                 require: true
             },
             post:[{
                 type: mongoose.Schema.Types.ObjectId,
                 ref: 'Post'
             }]
        })
    }
}
module.exports = Blog;