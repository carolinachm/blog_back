'use strict'

const Site = require ('../models/site');

class SiteRepository{

    constructor(siteRepository){
        this.siteRepository = siteRepository;
    }

    async findAll(){
        const site = await this.siteRepository.find({})
        return site;
    }
    async findById(id){
        const site = await this.siteRepository.findById(id);
        return site;
    }
    async create(data){
        var site = new Site(data);
        const si = await this.siteRepository.save({site:this.model});
        return si;
    }
    async update(id, data){
        await findByIdAndUpdate(id,req.body)
    }
    async delete(id){
        await findByIdAndRemove(id)
    }
}
module.exports = SiteRepository;