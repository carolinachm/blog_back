'use strict';
const Express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//importacao das controllers
const GaleriaController = require('./controllers/galeria-controller')
//importacao das model
const Galeria = require('./models/galeria')

class Server {

    constructor() {
        //instranciando a Express
        this.app = new Express();

        this.app.use(bodyParser.json({
            type: 'application/*+json',
            limit: '5mb'
        }));
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));


        this.app.use(Express.static('./uploads'))



        // Connecting to the database
        mongoose.connect(dbConfig.url)
            .then(() => {
                console.log("Successfully connected to the database");
            }).catch(err => {
                console.log('Could not connect to the database. Exiting now...');
                process.exit();
            });

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

