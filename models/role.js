'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      
    }
  }
  Role.init({
    nombreRol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    timestamps: false
  });
  return Role;
};