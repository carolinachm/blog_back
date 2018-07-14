'use strict'

const mongoose = require('mongoose');
const multer = require('multer');
//const upload = multer({ dest: 'uploads/' });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});



var model;

class BlogController {


    constructor(app){

        app.get('/blogs', this.findAll);
        app.post('/blogs', upload.single('foto'), this.create);
        app.put('/blogs', this.update);
        app.delete('/blogs', this.remove);

        model = mongoose.model('Blog');


    }
    async findAll(req, res){
        res.json(await model.find());
    }

    async create(req, res){
        console.log(req.body);
        let blog = req.body;
        blog.foto = req.file.path;
        res.json(await model.create(blog));
    }

    async update(req, res){
        let blog = req.body;
        res.json(await model.update({_id: blog._id}, blog));
    }

    async remove(req, res){
        console.log("Deletando o blog...");
        let id = req.body._id;
        res.json(await model.remove({_id: id}));
    }
}
module.exports = BlogController;