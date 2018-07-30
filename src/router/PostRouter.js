class PostRouter{

    constructor(app){

        app.get('/posts', this.findAll);
        // app.get('/busca/:id', this.findById);
        app.post('/posts', upload.single('foto'),this.create);
        app.put('/posts/:id', this.update);
        app.delete('/posts/:id', this.delete);
        
    }
}
module.exports = PostRouter;