class Config{
    static createConfig(){
        global.config = {
            port: 3000,
            db:{
                name: "controlpec",
                url: "localhost:27017"
            }
        }
    }
}

module.exports = Config.createConfig();