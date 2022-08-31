const { Router } = require('express');

const { uploadP } = require('../middlewares/multer');
const { validarArchivoSubir } = require('../middlewares/valida-archivo');

const router = Router();

router.post('/', uploadP(), (req, res ) =>{
    console.log(req.files);
    res.send('OK');
} );

module.exports = router;