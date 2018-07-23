'use strict'


class Post {
    constructor(mongoose) {

        var Schema = mongoose.Schema;
        
        var PostSchema = new Schema({
            titulo: String,
            resumo: String,
            dataPublicacao: "",
            dataInclusao:"",
            cliques: "",
            foto: String,
            site: {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Site',
                require: true
            },
            autor:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Autor',
                require:true
            }
        })

        mongoose.model('Post', PostSchema);
    }

}
module.exports = Post;