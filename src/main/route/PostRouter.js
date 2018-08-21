'use strict'

const PostController = require('../controller/PostController')
const multer = require('multer');
// cria uma instância do middleware configurada
const upload = multer({ dest: 'uploads/' });

class PostRouter{

    constructor(app){

        app.route('/posts')
        .get(PostController.findAll)
        .post(upload.single('foto'),PostController.create)
        .put(PostController.update)
        .delete(PostController.remove);
        app.route('posts/:id')
        .get(PostController.getById);
    }
}
module.exports = PostRouter;