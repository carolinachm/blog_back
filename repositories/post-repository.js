'use strict'

var Post;

class PostRepository{

    constructor(mongoose){
        Post = mongoose.model('Post')
    }

    async findAll(){
        const post = await Post.find({})
        return post;
    }
    async findById(id){
        const post = await Post.findById(id);
        return post;
    }
    async create(data){
        var post = new Post(data);
        const po = await post.save();
        return po;
    }
    async update(id, data){
        await findByIdAndUpdate(id,req.body)
    }
    async delete(id){
        await findByIdAndRemove(id)
    }
}
module.exports = PostRepository;