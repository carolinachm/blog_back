'use strict';

class IndexRouter{

    constructor(app){

        app.get('/', (req, res, next) => {
            console.log('IndexRouter')
            res.status(200).json({
                title: "ControlPec - Api",
                versiom: "0.0.1"
            });
        })
    }
}
module.exports = IndexRouter;