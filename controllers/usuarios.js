const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const { AbilityBuilder, Ability } = require('@casl/ability');

const {defineAbilityForAdmin} = require('../helpers/ability');


const {Role, Usuario, Usuario_has_Roles} = require('../models/index.js');

const crearUsuario = async (req = request, res = response) => {

    const { nombre, 
           primer_apellido, 
           segundo_apellido,
           correo,
           telefono,
           estado, 
           password,
           zona,
           rol } = req.body;
           
    try {
      
      const rolUsuario = await Role.findOne({where: {nombreRol: rol}}); 
      
      const salt = bcryptjs.genSaltSync();
      const hashPassword = bcryptjs.hashSync(password, salt);

      const newUsuario = await Usuario.create({ 
          nombre: nombre,
          primer_apellido: primer_apellido,
          segundo_apellido: segundo_apellido,
          correo: correo,
          telefono: telefono,
          estado,
          password: hashPassword,
          zona
        });

      await Usuario_has_Roles.create({
          idUsuario: newUsuario.id,
          idRol: rolUsuario.id
      })

      res.json({
        newUsuario
      });

    } catch (error) {
      return res.status(500).json({
        msg:"El servidor encontró una condición inesperada que le impide completar la petición de creació de usuario"
      })
    }
    
}

const usuariosDelete = async(req, res = response) => {

  const { id } = req.params;
  

   const siPuede = req.permisos.can('delete','usuario');

    if ( !siPuede ) {
      return res.status(400).json({
        msg: 'No es administrador'
      })
    }
  
    const usuario = await Usuario.findOne( {where: {id}} );
    await usuario.update( {estado: false});

  res.json({usuario});
}

module.exports = {
    crearUsuario,
    usuariosDelete
}