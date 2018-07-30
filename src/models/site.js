'use strict'

const mongoose = require('mongoose');

class Site {
    constructor() {
        mongoose.model('Site', {
           
                id: "",
                nome: String,
                url: String,
               
        })
    }

}
module.exports = Site;