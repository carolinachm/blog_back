'use strict'

const mongoose = require('mongoose')
const Post = mongoose.model('Post')

class PostService{

    static async findAll(obj){
        return await Post.find(obj);
    }
    static async getById(id){
        return await Post.findById(id);
    }
    static async create (post){
        return await Post.create(post);
    }
    static async update(post){
        return await Post.findByIdAndUpdate(post);
    }
    static async remove(post){
        return await Post.findByIdAndRemove(post);
    }

}
module.exports = PostService;