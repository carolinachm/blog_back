'use strict';
const Express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//importacao das controllers
const GaleriaController = require('./controllers/galeria-controller')
//importacao das model
const Galeria = require('./models/galeria')

class Server {

    constructor() {
        //instranciando a Express
        this.app = new Express();

        this.app.use(bodyParser.json({
            type: 'application/*+json' ,
            limit: '5mb'
        }));
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        

        this.app.use(Express.static('./uploads'))

             
        //conectar com banco
        mongoose.connect('mongodb://mongo:mongo12@ds151530.mlab.com:51530/db_blog');

        //instanciando a model
        new Galeria();
        //instanciando a Controller
        this.galeriaController = new GaleriaController(this.app);

        this.app.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });

    }
}
new Server();

