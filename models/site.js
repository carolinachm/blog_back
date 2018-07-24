'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Site {
    constructor() {
        const Site = new Schema({
           
                id: "",
                nome: String,
                url: String,
               
        })
        mongoose.model('Site', Site);
    }

}
module.exports = Site;