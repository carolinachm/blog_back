'use strict'

const mongoose = require('mongoose');

class Site extends  mongoose.Schema{
    constructor() {

        super({
            nome: String,
                url: String,
        })
        
        mongoose.model('Site', this);
    }

}
module.exports = Site;