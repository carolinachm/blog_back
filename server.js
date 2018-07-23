'use strict';
const Express = require('express');
const bodyParser = require('body-parser');


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//importacao das model
const Post = require('./models/post')
const Autor = require('./models/autor')
const Site = require('./models/site')

//importacao das controllers

const PostController = require('./controllers/post-controller')
const AutorController = require('./controllers/autor-controller')
const SiteController = require('./controllers/site-controller')


class Server {

    constructor() {
        //instranciando a Express
        this.app = new Express();

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));


        this.app.use(Express.static('./uploads'))



        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
            if (req.method === "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
                return res.status(200).json({});
            }
            next();
        });


        // Connecting to the database
        mongoose.connect(dbConfig.url)
            .then(() => {
                console.log("Successfully connected to the database");
            }).catch(err => {
                console.log('Could not connect to the database. Exiting now...');
                process.exit();
            });

        //instanciando a model
        new Post()
        new Autor()
        new Site()
        //instanciando a Controller
       
        this.postController = new PostController(this.app);
        this.autorController = new AutorController(this.app);
        this.siteController = new SiteController(this.app);

        this.app.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });

    }
}
new Server();

