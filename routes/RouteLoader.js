'use strict'

const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

class RouteLouder {

    constructor(app){
        fs.readdirSync(__dirname)
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(function (file) {
            console.log(file);
            var route = require((path.join(__dirname, file)));
            new route(app);
        });
    }

   
}

module.exports = RouteLouder;