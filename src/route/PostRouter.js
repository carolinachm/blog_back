'use strict'

const PostController = require('../controller/PostController')

class PostRouter{

    constructor(app){

        app.route('/posts')
        .get(PostController.findAll)
        .post(PostController.create)
        .put(PostController.update)
        .delete(PostController.remove);
        app.route('posts/:id')
        .get(PostController.findById);
    }
}
module.exports = PostRouter;