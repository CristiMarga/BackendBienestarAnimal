const { response, request} = require("express");
const bcryptjs = require('bcryptjs')

const {Usuario, Role, Usuario_has_Roles} = require('../models/index');

const { generarJWT } = require("../helpers/generar-jwt");


const login = async (req = request, res = response) =>{
    const {correo,password} = req.body;
    try {

        // Verificar si el email existe
        const usuario = await Usuario.findOne({where:{correo}});
        if(!usuario){
            return res.status(404).json({
                msg:`Usuario / Password no son correctos - correo`
            })
        }

        // SI el usuario está activo
        if(usuario.estado === false){
            return res.status(400).json({
                msg:`No se puede completar login - Usuario no activo`
            })
        }
         // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password,usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - password'
            })
        }
        
        // Generar el JWT
        const U_h_R = await Usuario_has_Roles.findOne({where: {idUsuario: usuario.id}});
        const rolUsuario = await Role.findOne({where: {id: U_h_R.idRol}});
        
        const token = await generarJWT(usuario.id,rolUsuario.nombreRol);
        
        res.json({
            usuario,
            token
        }) 
    } catch (error) {
        return res.status(500).json({
            msg:"El servidor encontró una condición inesperada que le impide completar la petición de login"
        })
    }
}
module.exports = {
    login
}