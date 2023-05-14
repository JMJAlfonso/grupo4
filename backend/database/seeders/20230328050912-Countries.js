'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('countries', [
      {
        name: 'Argentina',
        code: 'arg'
      }
      ,
      {
        name: 'Bolivia',
        code: 'bol'
      },
      {
        name: 'Peru',
        code: 'per'
      },
      {
        name: 'Brasil',
        code: 'bra'
      },
      {
        name: 'Colombia',
        code: 'col'
      }
      ,
      {
        name: 'Paraguay',
        code: 'par'
      },
      {
        name: 'Uruguay',
        code: 'uru'
      },
      {
        name: 'Chile',
        code: 'chi'
      },
      {
        name: 'Venezuela',
        code: 'ven'
      },
      {
        name: 'Guyana Francesa',
        code: 'guf'
      }
    ], {});

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
