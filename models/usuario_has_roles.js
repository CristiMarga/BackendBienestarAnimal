'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario_has_Roles extends Model {
    static associate(models) {

    }
  }
  Usuario_has_Roles.init({
    idUsuario: DataTypes.INTEGER,
    idRol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario_has_Roles',
    timestamps: false
  });
  return Usuario_has_Roles;
};