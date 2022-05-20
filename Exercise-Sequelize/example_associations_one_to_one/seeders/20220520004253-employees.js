'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', 
    [
      {
        first_name: 'Marcos',
        last_name: 'Zuck',
        age: 49,
        adress_id: 1,
      },
      {
        first_name: 'Fred',
        last_name: 'Mercurio',
        age: 19,
        adress_id: 2,
      },
      {
        first_name: 'Ayrton',
        last_name: 'Keno',
        age: 51,
        adress_id: 3,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
