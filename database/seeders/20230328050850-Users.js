'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('users', [
      {
        name: 'jacky',
        surname: 'vamosquesepuede',
        email: 'jacky@conectate.com',
        password: '$2a$08$p7fRqdHKmG3iesuxqoCtDuq5TYGLP/q8hyK8H2W6hyiv1UI3XzDni',
        avatar: 'messi.jpg'
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
