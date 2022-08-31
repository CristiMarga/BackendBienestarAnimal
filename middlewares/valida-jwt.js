const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const {defineAbilityForAdmin} = require('../helpers/ability');

const {Role, Usuario, Usuario_has_Roles} = require('../models/index.js');


const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid, rol } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        // leer el usuario que corresponde al uid
        // const usuario = await Usuario.findById( uid );

        // if( !usuario ) {
        //     return res.status(401).json({
        //         msg: 'Token no válido - usuario no existe DB'
        //     })
        // }

        // // Verificar si el uid tiene estado true
        // if ( !usuario.estado ) {
        //     return res.status(401).json({
        //         msg: 'Token no válido - usuario con estado: false'
        //     })
        // }

        //
        //const ability = defineAbilityForAdmin();
        req.uid = uid;
        req.rol = rol;

        if ( rol === 'Administrador') {
            req.permisos = defineAbilityForAdmin();
            //defineAbilityForAdmin
        } else {
            res.status(401).json({
                msg: 'No eres Admin'
            })
        }
        
        
        //req.usuario = usuario;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}




module.exports = {
    validarJWT
}