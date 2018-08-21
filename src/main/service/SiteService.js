'use strict'

const mongoose = require('mongoose');
const Site = mongoose.model('Site');

class SiteService{

    static async findAll(obj){
        return await Site.find(obj);
    }
    static async getById(id){
        return await Site.findById(id);
    }
    static async create(site){
        return await Site.create(site);
    }
    static async update(site){
        return await Site.findByIdAndUpdate(req.params.id);
    }
    static async remove(site){
        return await Site.findByIdAndRemove(req.params.id);
    }
}
module.exports = SiteService;