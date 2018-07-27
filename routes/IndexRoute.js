'use strict';

class IndexRoute{

    constructor(app){

        app.get('/', (req,res) => {
            res.status(200).json({
                titulo:"Blog",
                versao:"0.0.1"
            })
        })
        
    }
}
module.exports = IndexRoute;