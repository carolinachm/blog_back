"use strict";

const BodyParser = require("body-parser");
const Router = require("../router/Router");

class App {

    constructor(app) {
        app.use(BodyParser.json())
        app.use(BodyParser.urlencoded({
            extended: false
        }))
      

        new Router(app);
    }
}

module.exports = App;