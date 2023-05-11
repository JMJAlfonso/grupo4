'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('dificulties', [{
      name: 'Dificultad Media',
    },      
    {
      name: 'Dificultad Extrema'
    },
    {
      name: 'Dificultad Alta'
    },
    {
      name: 'Dificultad Baja'
    },   
    ],

      {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('dificulties', null, {});
  }
};
