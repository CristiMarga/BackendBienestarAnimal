'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      
      
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    primer_apellido: DataTypes.STRING,
    segundo_apellido: DataTypes.STRING,
    password: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    estado:{
      type:DataTypes.BOOLEAN,
      defaultValue: true
    },
    zona: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Usuario',
    timestamps: false
  });

  return Usuario;
};