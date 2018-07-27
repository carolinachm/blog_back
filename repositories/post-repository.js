'use strict'

var Post

class Post{

    constructor(mongoose){
        Post = mongoose.model('Post')
    }

    async findAll(){
        const post = await this.Post.find({})
        return post;
    }
    async findById(id){
        const post = await this.Post.findById(id);
        return post;
    }
    async create(data){
        var post = new Post(data);
        const po = await this.Post.save();
        return po;
    }
    async update(id, data){
        await Post
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                
            }
        });

    }
    async delete(){
        await Post
        .findOneAndRemove(id);


    }
}
module.exports = Post;