'use strict'

const SiteController = require('../controllers/site-controller')


class SiteRoute{

    constructor(app){
        
        var controller = new SiteController(app.get('mongoose'));

        app.get('/', controller.findAll);
        //app.get('/:id', controller.findById);
        app.post('/', controller.create);
        app.put('/:id', controller.update);
        app.delete('/', controller.delete);

    }
}
module.exports = SiteRoute;