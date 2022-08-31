'use strict';
const usuarios = []
const bcryptjs = require('bcryptjs')
const salt = bcryptjs.genSaltSync(10);
for (let i = 0; i < 10; i++) {
  usuarios.push({
    nombre:`nombre${i}`,
    primer_apellido:`primer_apellido${i}`,
    segundo_apellido:`segundo_apellido${i}`,
    password:bcryptjs.hashSync(`password${i}`,salt),
    telefono:`123456789${i}`,
    correo:`email${i}@gmail.com`,
    zona:`zona${i}`
  })
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios',usuarios,{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
