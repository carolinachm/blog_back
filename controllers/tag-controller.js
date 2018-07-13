'use strict'

const mongoose = require('mongoose');
var model;

class TagController {

    constructor(app) {

        app.get('/tags', this.findAll);
        app.post('/tags',  this.create);
        app.put('/tags/:_id', this.update);
        app.delete('/tags/:_id', this.delete);

        model = mongoose.model('Tag');


    }
    async findAll(req, res) {
        res.json(await model.find({}));
    }
    async create(req, res) {
        let tag = req.body;
        try {
            const gal = await model.create(tag);
            res.status(201).send({ message: "tag cadastrado com sucesso", gal });
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
                message: 'tag atualizado com sucesso!'
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
                message: 'tag removido com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }

    }
}
module.exports = TagController;