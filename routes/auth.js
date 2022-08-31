const {Router}        = require('express');
const {check}         = require('express-validator');
const { login }       = require('../controllers/auth');
const {validarCampos} = require('../middlewares/validar-campos');


const router = Router();

router.post('/login',[
    check('correo', 'No es una dirección de correo válida').isEmail(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login );

module.exports= router;