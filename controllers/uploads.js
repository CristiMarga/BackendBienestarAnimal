const { request, response } = require('express');
const multer = require('multer');
const path = require('path');
//const { v4: uuidv4 } = require('uuid');

// const storageUpload = () => {
//     const storage = multer.diskStorage({
//         // path.join(__dirname, '../public/uploads'
//         destination: path.join(__dirname,'./assets/files'),
//         filename: (req, file, cb) => {
//             cb(null, uuidv4() + path.extname(file.originalname));
//             }
//     });
//     return storage;
// }

const filtro = (req, file, cb) => {

    const extensiones = /jpg|pdf|jpeg|mp4/;
    var mimetype = extensiones.test(file.mimetype);
    var extension = extensiones.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extension) {
        return cb(null, true);
    } else {
        cb("Error: El archivo debe ser con las extensiones - " + extensiones);
    }

}

module.exports = {
    //storageUpload,
    filtro
}