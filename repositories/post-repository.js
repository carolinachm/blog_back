'use strict'

const Post = require ('../models/post');

class PostRepository{

    constructor(postRepository){
        this.postRepository = postRepository;
    }

    async findAll(){
        const post = await this.postRepository.find({})
        return post;
    }
    async findById(id){
        const post = await this.postRepository.findById(id);
        return post;
    }
    async create(data){
        var post = new Post(data);
        const po = await this.postRepository.save({post:this.model});
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