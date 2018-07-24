'use strict'

const UsuarioController = require('../controllers/usuario-controller')


class UsuarioRoute{

    constructor(app){
        
        var controller = new UsuarioController(app.get('mongoose'));

        app.get('/', controller.findAll);
        //app.get('/:id', controller.findById);
        app.post('/', controller.create);
        app.put('/:id', controller.update);
        app.delete('/:id', controller.delete);

        app.use('/usuarios', route);

      
    }
}
module.exports = UsuarioRoute;