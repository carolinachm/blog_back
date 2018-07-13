'use strict';
const Express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//importacao das controllers
const BlogController = require('./controllers/blog-controller')
const AutorController = require('./controllers/autor-controller')
const PostController = require('./controllers/post-controller')
const TagController = require('./controllers/tag-controller')

//importacao das model
const Blog = require('./models/blog')
const Autor = require('./models/autor')
const Post = require('./models/post')
const Tag = require('./models/tag')

class Server {

    constructor() {
        //instranciando a Express
        this.app = new Express();

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
                return res.status(200).json({});
            }
            next();
        });
        

        this.app.use(Express.static('./uploads'))

             
        //conectar com banco
        mongoose.connect('mongodb://mongo:mongo12@ds151530.mlab.com:51530/db_blog');

        //instanciando a model
        new Blog();
        new Autor();
        new Post();
        new Tag();
        //instanciando a Controller
        this.blogController = new BlogController(this.app);
        this.autorController = new AutorController(this.app);
        this.postController = new PostController(this.app);
        this.tagContrller = new TagController(this.app);

        this.app.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });

    }
}
new Server();

