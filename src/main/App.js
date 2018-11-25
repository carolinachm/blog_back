"use strict";
require('./../../config');
require('./service/LoggerService');
require('./authentication/jwt');
require('./authentication/google');
require('./authentication/facebook');

const mustacheExpress = require('mustache-express');
const passport = require('passport');
const token = require('./token');

const BodyParser = require('body-parser');
const ConnectionFactory = require('./connection/ ConnectionFactory');
const Loader = require('./Loader');

// Generate the Token for the user authenticated in the request
function generateUserToken(req, res) {
    const accessToken = token.generateAccessToken(req.user.id);
    res.render('authenticated.html', {
        token: accessToken
    });
}


const Server = require('./Server');

class App {

    static async init() {

        let app = new Server();

        try {
            global.logger.info("Obtendo conexão com o banco de dados...");
            await ConnectionFactory.getConnection();
            global.logger.success("Banco conectado com sucesso!");
        } catch (error) {
            global.logger.error(`Erro ao conectar com o banco de dados: ${error.message}`);
            process.exit(1);
        }

        app.use(BodyParser.json());
        app.use(BodyParser.urlencoded({
            extended: true
        }));
        app.use(passport.initialize());

        app.get('/api/authentication/google/start',
            passport.authenticate('google', {
                session: false,
                scope: ['openid', 'profile', 'email']
            }));
        app.get('/api/authentication/google/redirect',
            passport.authenticate('google', {
                session: false
            }),
            generateUserToken);

        app.get('/api/authentication/facebook/start',
            passport.authenticate('facebook', {
                session: false
            }));
        app.get('/api/authentication/facebook/redirect',
            passport.authenticate('facebook', {
                session: false
            }),
            generateUserToken);

        app.get('/api/insecure', (req, res) => {
            res.send('Insecure response');
        });

        app.get('/api/secure',
            passport.authenticate(['jwt'], {
                session: false
            }),
            (req, res) => {
                res.send('Secure response from ' + JSON.stringify(req.user));
            });

        Loader.loadAll(app);

        app.listen(global.config.port, () => {
            global.logger.success(`API rodando ma porta ${global.config.port}!`)
            console.log('JWT for demo: ' + token.generateAccessToken(0));
        });

        app.get('/', (req, res) => {
            res.send("Blog v0.0.1");
        })


    }
}

App.init();