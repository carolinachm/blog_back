'use strict'

const PostController = require('../controllers/post-controller')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
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

// const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
//   });


class PostRoute{

    constructor(app){
        
        var controller = new PostController(app.get('mongoose'));

        app.get('/', controller.findAll);
        //app.get('/:id', controller.findById);
        app.post('/', upload.single('foto'),controller.create);
        app.put('/:id', controller.update);
        app.delete('/:id', controller.delete);

      
    }
}
module.exports = PostRoute;