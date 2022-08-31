'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', [
      { nombreRol: 'Administrador' },
      { nombreRol: 'Colaborador Bienestar Animal'},
      { nombreRol: 'Miembro Asociación'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
