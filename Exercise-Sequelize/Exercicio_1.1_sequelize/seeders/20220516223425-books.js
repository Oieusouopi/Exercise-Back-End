'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('books',
    [
      {
        title: 'Harry potter é a ordem da fenix',
        author: 'J.K Rowling',
        pageQuantity: 704,
      },
      {
        title: 'Sherlock Holmes um estudo em vermelho',
        author: 'Arthur conan doyle',
        pageQuantity: 190,
      },
      {
        title: 'O mundo de sofia',
        author: 'Jostein Gaarder',
        pageQuantity: 566,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('books', null, {})
  }
};
