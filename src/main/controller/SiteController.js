'use strict'

const SiteService = require('../service/SiteService');

class SiteController{

    static async findAll(req, res, next){
        try {
            let result = await SiteService.find({});
            res.json({message:'Consulta com sucesso'},result);
        }catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    static async getById(req, res, next){
        try {
            let result = await SiteService.findById(req.params.id);
            res.json({message:'Consulta com sucesso'},result);
        }catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    static async create(req, res, next){
        try {
            let result = await SiteService.create();
            res.json({message:'Site Cadastrado com sucesso'},result);
        }catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    static async update(req, res, next){
        if(!req.body.id) return res.status(400).send("É preciso fornecer o ID do site para alterá-lo");
        try {
            let result = await SiteService.update(req.body);
            res.json({message:'Site Atualizado com sucesso'},result);
        }catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    static async remove(req, res, next){
        if(!req.body.id) return res.status(400).send("É preciso fornecer o ID do site para deleta-lo");
        try {
            let result = await SiteService.remove(req.body);
            res.json({message:'Site deletado com sucesso'},result);
        }catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
}