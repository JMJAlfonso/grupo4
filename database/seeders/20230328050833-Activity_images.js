'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('activity_images', [{
      name: 'Trekking.JPG',
    },
    {
      name: 'kayac.JPG',
    },
    {
      name: 'paracaidismo.JPG'
    },
    {
      name: 'Parapente.JPG'
    },
    {
      name: 'Rappel.JPG'
    },
    {
      name: 'cabalgata.JPG'
    },
    {
      name: 'ciclismo.JPG'
    },
    {
      name: 'Espeleismo.JPG'
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('activity_images', null, {});
  }
};
