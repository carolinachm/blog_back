'use strict'

const PostController = require('../controllers/post-controller')

class PostRoute{

    constructor(app){

        var controller = new PostController(app.get('mongoose'))

        app.get('/', this.findAll);
        app.get('/:id', this.findById);
        app.post('/', upload.single('foto'),this.create);
        app.put('/:id', this.update);
        app.delete('/:id', this.delete);

        app.use('/posts', router)
    }
}
module.exports = PostRoute;