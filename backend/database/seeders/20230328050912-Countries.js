'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('countries', [
      {
        name: 'argentina',
        code: 'arg'
      }
      ,
      {
        name: 'argentina',
        code: 'arg'
      },
      {
        name: 'argentina',
        code: 'arg'
      },
      {
        name: 'argentina',
        code: 'arg'
      },
      {
        name: 'argentina',
        code: 'arg'
      }
      ,
      {
        name: 'argentina',
        code: 'arg'
      }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('countries', null, {});
     */
    await queryInterface.bulkDelete('countries', null, {});
  }
};
