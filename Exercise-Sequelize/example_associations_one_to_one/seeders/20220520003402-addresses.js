'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses',
    [
      {
        city: 'Belo Horizonte',
        street: 'Av elias antonio issa',
        number: 96,
      },
      {
        city: 'São Paulo Capital',
        street: 'Jacarandas',
        number: 100,
      },
      {
        city: 'Rio de Janeiro',
        street: 'Fluminense',
        number: 80,
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
