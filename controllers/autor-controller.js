'use strict'

const mongoose = require('mongoose');

var model;

class AutorController{

    constructor(app){

        app.get('/autores', this.findAll);
        // app.get('/autores/:_id', this.findById);
        app.post('/autores', this.create);
        app.put('/autores', this.update);
        app.delete('/autores', this.delete);
        
        model = mongoose.model('Autor');

    }
    async findAll(req,res){
        try {
            const autor = await model.find({})
            res.status(201).send({autor});
        } catch (e) {
            console.log(e);
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
    // async getById(req,res){
    //     try {
    //         const autor = await model.findById(req.params.autor._id);
    //         res.status(201).send({autor});
    //     } catch (e) {
    //         console.log(e);
    //         res.status(500).send({
    //             message: 'Falha ao processar sua requisição'
    //         });
    //     }
    // }
    async create(req, res){
      try{
        const autor = await model.create(req.body);
      
        res.status(201).send({message: "autor cadastrado com sucesso",autor});
        
      }catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

    }
    async update(req, res){
        try{
             await model.update(req.params.id, {$set: req.body});
             res.status(200).send({
                message: 'autor atualizado com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
       
    }

    async delete(req, res){
        try {
            await model.findByIdAndRemove(req.params.id)
            res.status(200).send({
                message: 'autor removido com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }
}
module.exports = AutorController;