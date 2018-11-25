'use strict'
const SiteController = require('../controller/SiteController')

class SiteRouter{

    constructor(app){

        app.route('/sites')
            .get(SiteController.findAll)
            .post(SiteController.create)
            .put(SiteController.update)
            .delete(SiteController.remove);
        app.route('sites/:id')
            .get(SiteController.getById);
    }

    
}
module.exports = SiteRouter;