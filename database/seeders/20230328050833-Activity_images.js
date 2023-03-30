'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('activity_images', [{
      name: 'Trekking.JPG',
      activities_id: 1,
    },
    {
      name: 'kayac.JPG',
      activities_id: 2,
    },
    {
      name: 'paracaidismo.JPG',
      activities_id: 3,
    },
    {
      name: 'Parapente.JPG',
      activities_id: 4,
    },
    {
      name: 'Rappel.JPG',
      activities_id: 5,
    },
    {
      name: 'cabalgata.JPG',
      activities_id: 6,
    },
    {
      name: 'ciclismo.JPG',
      activities_id: 7,
    },
    {
      name: 'Espeleismo.JPG',
      activities_id: 8,
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
