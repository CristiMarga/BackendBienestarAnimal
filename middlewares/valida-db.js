const {Usuario, Role} = require('../models/index');

const validaEmail = async( correo = '' ) => {

    const existeEmail = await Usuario.findOne({ where: {correo} });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado en la BD`);
    }
}

const validaRol = async(rol = '') => {
    const existeRol = await Role.findOne({where: {nombreRol: rol}});
    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe en la Base de Datos`);

    }
}

const validaTelefono = async( telefono = '' ) => {

    const existeTelefono = await Usuario.findOne({ where: {telefono} });
    if ( existeTelefono ) {
        throw new Error(`El teléfono: ${ telefono }, ya está registrado en la BD`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el id existe
    const existeUsuario = await Usuario.findOne( { where: { id } } );
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    validaEmail,
    validaTelefono,
    validaRol,
    existeUsuarioPorId
}