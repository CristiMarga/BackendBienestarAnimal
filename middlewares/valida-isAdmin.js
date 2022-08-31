const {Role, Usuario_has_Roles} = require('../models/index');

const validaRolIsAdmin = async() => {

    const idRolUser = Usuario_has_Roles.idRol;
    const idRol = Role.id;

    if(idRolUser == idRol){
        return 
    }
    // const existeRol = await Role.findOne({where: {nombreRol: rol}});
    // if (!existeRol) {
    //     throw new Error(`El rol ${rol} no existe en la Base de Datos`);

    // }
}

module.exports = {
    validaRolIsAdmin
}