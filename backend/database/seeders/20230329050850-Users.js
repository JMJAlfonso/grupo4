'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('users', [
      {
        name: 'Jaqueline',
        surname: 'Vazquez',
        email: 'jacky@conectate.com',
        tel: '+54 9 1124942933',
        password: '$2a$08$p7fRqdHKmG3iesuxqoCtDuq5TYGLP/q8hyK8H2W6hyiv1UI3XzDni',
        avatar: 'messi.jpg',
        roles_id: 1,
        countries_id: 1
      },
      {
        name: 'Alfonso',
        surname: 'Lombardi',
        email: 'alfonso@conectate.com',
        tel: '+54 9 1120304050',
        password: '$2a$08$p7fRqdHKmG3iesuxqoCtDuq5TYGLP/q8hyK8H2W6hyiv1UI3XzDni',
        avatar: 'emiliano_martinez.jpg',
        roles_id: 1,
        countries_id: 1
      }
      ,
      {
        name: 'Fabian',
        surname: 'Loza',
        email: 'fabian@conectate.com',
        tel: '+54 9 1180203230',
        password: '$2a$08$p7fRqdHKmG3iesuxqoCtDuq5TYGLP/q8hyK8H2W6hyiv1UI3XzDni',
        avatar: 'di_maria.jpg',
        roles_id: 2,
        countries_id: 1
      }
      ,
      {
        name: 'Yanina ',
        surname: 'Andrade',
        email: 'yanina@conectate.com',
        tel: '+54 9 1121238889',
        password: '$2a$08$p7fRqdHKmG3iesuxqoCtDuq5TYGLP/q8hyK8H2W6hyiv1UI3XzDni',
        avatar: 'otamendi.png',
        roles_id: 2,
        countries_id: 1
      }
      ,
      {
        name: 'Alejandro ',
        surname: 'Sosa',
        email: 'alejandro@conectate.com',
        tel: '+54 9 1184569652',
        password: '$2a$08$p7fRqdHKmG3iesuxqoCtDuq5TYGLP/q8hyK8H2W6hyiv1UI3XzDni',
        avatar: 'enzo.png',
        roles_id: 2,
        countries_id: 1
      }
      ,
      {
        name: 'Bruno  ',
        surname: 'Cabral',
        email: 'bruno@conectate.com',
        tel: '+54 9 1184569652',
        password: '$2a$08$p7fRqdHKmG3iesuxqoCtDuq5TYGLP/q8hyK8H2W6hyiv1UI3XzDni',
        avatar: 'dybala.jpg',
        roles_id: 2,
        countries_id: 1
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
