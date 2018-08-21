'user strict'

//importar rotas
const IndexRouter = require('../router/IndexRouter');
const PostRouter = require('../router/PostRouter');
const SiteRouter = require('../router/SiteRouter')
const UsuarioRouter = require('../router/IndexRouter')

class Router{

    constructor(app){
      console.log("Router")
        new IndexRouter(app);
        new PostRouter(app);
        new SiteRouter(app);
        new UsuarioRouter(app);
    }
    
}
module.exports = Router;