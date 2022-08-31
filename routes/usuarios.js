const { Router } = require('express');
const { check } = require('express-validator');

const { crearUsuario, usuariosDelete } = require('../controllers/usuarios');


const { validarCampos } = require('../middlewares/validar-campos');
const { validaRol,validaEmail,validaTelefono, existeUsuarioPorId } = require('../middlewares/valida-db');
const { validarJWT } = require('../middlewares/valida-jwt');

const router = Router();

router.post( '/',[
    //validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('primer_apellido', 'El primer apellido es obligatorio').not().isEmpty(),
    check('segundo_apellido', 'El segundo apellido es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(validaEmail),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('telefono').custom(validaTelefono),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe de tener más de 8 caracteres').isLength({ min: 8 }),
    check('zona', 'La Zona es obligatoria').not().isEmpty(),
    check('rol','El Rol es obligatorio').not().isEmpty(),
    check('rol').custom(validaRol), 
    validarCampos
    ],crearUsuario );

router.delete('/:id',[
        validarJWT,
        check('id', 'No es un ID válido'),
        check('id').custom( existeUsuarioPorId ),
        validarCampos
    ],usuariosDelete );

module.exports = router;