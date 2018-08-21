"use strict";
require('./../../config');
require('./service/LoggerService');

const BodyParser = require('body-parser');
const ConnectionFactory = require('./connection/ ConnectionFactory');
const Loader = require('./Loader');

const Server = require('./Server');

class App {
    
    static async init() {
        
        let app = new Server();
        
        try{
            global.logger.info("Obtendo conexão com o banco de dados...");
            await ConnectionFactory.getConnection();
            global.logger.success("Banco conectado com sucesso!");
        }catch(error){
            global.logger.error(`Erro ao conectar com o banco de dados: ${error.message}`);
            process.exit(1);
        }
        
        app.use(BodyParser.json());
        app.use(BodyParser.urlencoded({
            extended: true
        }));
        
        Loader.loadAll(app);

        app.listen(global.config.port,() => {
            global.logger.success(`API rodando ma porta ${global.config.port}!`)
        });
        
        app.get('/', (req, res) => {
            res.send("API ControlPec v0.0.1");
        })
        
        
    }
}

App.init();