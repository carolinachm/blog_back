class Config{
    static createConfig(){
        global.config = {
            port: 3000,
            db:{
                name: "controlpec",
                url: "192.168.1.2:27017"
            }
        }
    }
}

module.exports = Config.createConfig();