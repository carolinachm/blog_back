"use strict"

const convict = require('convict');

class Config{
    static createConfig(){
        global.config = {
            port: 3000,
            db:{
                name: "blog",
                url: "mongodb://mongo:mongo123@ds145639.mlab.com:45639/teste"
            },
            authentication: {
                google: {
                    "clientId": {
                        "doc": "The Client ID from Google to use for authentication",
                        "default": "",
                        "env": "GOOGLE_CLIENTID"
                    },
                    "clientSecret": {
                        "doc": "The Client Secret from Google to use for authentication",
                        "default": "",
                        "env": "GOOGLE_CLIENTSECRET"
                    }
                },
                facebook: {
                    "clientId": {
                        "doc": "The Client ID from Facebook to use for authentication",
                        "default": "",
                        "env": "FACEBOOK_CLIENTID"
                    },
                    "clientSecret": {
                        "doc": "The Client Secret from Facebook to use for authentication",
                        "default": "",
                        "env": "FACEBOOK_CLIENTSECRET"
                    }
                },
                token: {
                    secret: {
                        doc: 'The signing key for the JWT',
                        default: 'mySuperSecretKey',
                        env: 'JWT_SIGNING_KEY'
                    },
                    issuer: {
                        doc: 'The issuer for the JWT',
                        default: 'social-logins-spa'
                    },
                    audience: {
                        doc: 'The audience for the JWT',
                        default: 'social-logins-spa'
                    }
                }
            }
        }
        
        // config.validate();
        }
    
       
}

module.exports = Config.createConfig();