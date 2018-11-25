'use strict'
const UsuarioController = require('../controller/UsuarioController')

class UsuarioRouter{

    constructor(app){

        app.route('/usuarios')
            .get(UsuarioController.findAll)
            .post(UsuarioController.create)
            .put(UsuarioController.update)
            .delete(UsuarioController.remove);
        app.route('usuarios/:id')
            .get(UsuarioController.getById);
    }

    
}
module.exports = UsuarioRouter;