'use strict'

const mongoose = require('mongoose');

class Post {
    constructor() {
        mongoose.model('Post', {
            titulo: String,
            tag: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tag'
            }]
        })
    }
}
module.exports = Post;