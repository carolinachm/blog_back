class UsuarioRouter{

    constructor(app){

        app.get('/usuarios', this.findAll);
        // app.get('/usuarios/:_id', this.findById);
        app.post('/usuarios', this.create);
        app.put('/usuarios', this.update);
        app.delete('/usuarios', this.delete);
    }
}
module.exports = UsuarioRouter;