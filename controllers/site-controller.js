'use strict'

const SiteRepository = require('../repositories/site-repository')

var repository;

class SiteController{

    constructor(mongoose){
      
        repository = new SiteRepository(mongoose)
      
    }
    async findAll(req,res){
        try {
            const site = await repository.find({})
            res.status(201).send({site});
        } catch (e) {
            console.log(e);
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
    // async getById(req,res){
    //     try {
    //         const site = await repository.findById(req.params.site._id);
    //         res.status(201).send({site});
    //     } catch (e) {
    //         console.log(e);
    //         res.status(500).send({
    //             message: 'Falha ao processar sua requisição'
    //         });
    //     }
    // }
    async create(req, res){
      try{
        const site = await repository.create(req.body);
      
        res.status(201).send({message: "site cadastrado com sucesso",site});
        
      }catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

    }
    async update(req, res){
        try{
             await repository.update(req.params.id, {$set: req.body});
             res.status(200).send({
                message: 'site atualizado com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
       
    }

    async delete(req, res){
        try {
            await repository.findByIdAndRemove(req.params.id)
            res.status(200).send({
                message: 'site removido com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
}
module.exports = SiteController;