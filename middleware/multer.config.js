const multer = require('multer');
const path = require('path');
const util = require("util");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = path.extname(name)
        const name_temp = name.split(extension).join('')
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        callback(null, name_temp + '_' + uniqueSuffix + extension);
    }
});

var uploadFiles = multer({storage: storage}).array('image', 7);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;