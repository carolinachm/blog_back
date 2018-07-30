class SiteRouter{

    constructor(app){

        app.get('/sites', this.findAll);
        // app.get('/sites/:_id', this.findById);
        app.post('/sites', this.create);
        app.put('/sites', this.update);
        app.delete('/sites', this.delete);
        
    }
}
module.exports = SiteRouter;