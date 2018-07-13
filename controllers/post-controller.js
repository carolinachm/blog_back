'use strict'

const mongoose = require('mongoose');
var model;

class PostController {

    constructor(app) {

        app.get('/posts', this.findAll);
        app.post('/posts',  this.create);
        app.put('/posts/:_id', this.update);
        app.delete('/posts/:_id', this.delete);

        model = mongoose.model('Post');


    }
    async findAll(req, res) {
        res.json(await model.find({}));
    }
    async create(req, res) {
        let post = req.body;
        post.titulo = req.body.titulo;
        post.tag = req.body.tag;
        try {
            const po = await model.create(post);
            res.status(201).send({ message: "post cadastrado com sucesso", po });
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
                message: 'post atualizado com sucesso!'
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
                message: 'post removido com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }

    }
}
module.exports = PostController;