'use strict'

const mongoose = require('mongoose');
var model;

class AutorController {

    constructor(app) {

        app.get('/autores', this.findAll);
        app.post('/autores',  this.create);
        app.put('/autores/:_id', this.update);
        app.delete('/autores/:_id', this.delete);

        model = mongoose.model('Autor');


    }
    async findAll(req, res) {
        res.json(await model.find({}));
    }
    async create(req, res) {
        let autor = req.body;
        try {
            const au = await model.create(autor);
            res.status(201).send({ message: "autor cadastrado com sucesso", au });
        } catch (e) {
            console.log(e);
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }



    }
    async update(req, res) {
        try {
            await model.update(req.params.id, req.body);
            res.status(200).send({
                message: 'autor atualizado com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }

    }
    async delete(req, res) {
        try {
            await model.delete(req.body.id)
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