'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('activities', [
      {
        name: 'Trekking',
        description: 'El trekking consiste en el desarrollo de caminatas por un entorno natural y abierto con fines recreativos. Vamos a acceder desde RP13, recorriendo desde el centro cívico de Villa Pehuenia 12 kilómetros hacia el norte con destino a Paso del Arco.',
        price: 3000,
        dateStart: '2023-02-14T14:59',
        dateFinish: '2023-02-22T15:03'
      },
      {
        name: 'Kayac',
        description: 'El método o técnica para ir en kayak es mediante unas palas o remos, los cuales propulsan el kayak al introducirlos en el agua.El tripulante o tripulantes se encargan de de realizar el movimiento continuo y simultáneo para mover el kayak, consiguiendo así moverse hacia delante o hacia atrás.',
        price: 4819,
        dateStart: '09/02/2023, 16:00 PM',
        dateFinish: '09/02/2023, 17:00 PM'
      }, {
        name: 'Paracaidismo',
        description: 'El paracaidismo es la técnica de lanzamiento de seres humanos u objetos desde cierta altura usando un paracaídas para amortiguar el impacto del aterrizaje. Se puede realizar desde cualquier aeronave como un avión, helicóptero, globo aerostático o desde un objeto fijo elevado a la altura necesaria..',
        price: 8000,
        dateStart: '05/02/2023, 10:00 AM',
        dateFinish: '05/02/2023, 12:00 AM'
      },
      {
        name: 'Parapente',
        description: 'El parapente es una aeronave ligera y flexible, hecha únicamente de “cuerdas y tela”. La disciplina deportiva se basa en el vuelo sin motor, despegando de una pendiente y volando aprovechando las corrientes térmicas y dinámicas..',
        price: 5430,
        dateStart: '01/03/2023, 08:00 AM',
        dateFinish: '01/03/2023, 10:00 AM'
      },
      {
        name: 'Rappel',
        description: 'El rápel o también llamado rappel es un método de descenso por cuerda. Es utilizado en superficies verticales una pared o un tiro vertical. El rápel suele ser utilizado en espacios abiertos o actividades tales como el barranquismo, montañismo, espeleología, escalada en roca y otras disciplinas que requieren de un descenso vertical.',
        price: 4000,
        dateStart: '25/02/2023, 13:00 PM',
        dateFinish: '25/02/2023, 15:00 PM'
      },
      {
        name: 'Cabalgata',
        description: 'La cabalgata es una actividad de esparcimiento y deportiva que utiliza al equino en un medio natural.',
        price: 2134,
        dateStart: '09/03/2023, 19:00 PM',
        dateFinish: '09/03/2023, 20:00 PM'
      },
      {
        name: 'Ciclismo',
        description: 'El ciclismo de montaña,es considerado un deporte de riesgo, esta actividad es realizada en circuitos naturales a través de bosques por caminos angostos con cuestas empinadas..',
        price: 2000,
        dateStart: '14/03/2023, 17:00 PM',
        dateFinish: '14/03/2023, 20:00 PM'
      },
      {
        name: 'Espeleismo',
        description: 'Consiste básicamente en explorar cavidades geológicas naturales, valiéndose de técnicas y equipos específicos de descenso y desplazamiento..',
        price: 6000,
        dateStart: '17/02/2023, 07:00 AM',
        dateFinish: '17/02/2023, 13:00 PM'
      }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('activities', null, {});
  }
};
