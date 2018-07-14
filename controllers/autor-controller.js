'use strict'

const mongoose = require('mongoose');
var model;

class AutorController {

    constructor(app) {

        app.get('/autores', this.findAll);
        app.post('/autores',  this.create);
        app.put('/autores/:_id', this.update);
        app.delete('/autores/:_id', this.remove);

        model = mongoose.model('Autor');


    }
    async findAll(req, res){
        res.json(await model.find());
    }

    async create(req, res){
        console.log(req.body);
        let autor = req.body;
        res.json(await model.create(autor));
    }

    async update(req, res){
        let autor = req.body;
        res.json(await model.update({_id: autor._id}, autor));
    }

    async remove(req, res){
        console.log("Deletando o autor...");
        let id = req.body._id;
        res.json(await model.remove({_id: id}));
    }
}
module.exports = AutorController;