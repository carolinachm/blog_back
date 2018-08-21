'use strict'

const mongoose = require('mongoose');

class Site extends  mongoose.Schema{
    constructor() {

        super({
            nome: String,
                url: String,
        })
        
        mongoose.model('Site', Site);
    }

}
module.exports = Site;