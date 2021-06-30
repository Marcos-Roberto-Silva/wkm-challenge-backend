"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          id: 1,
          name: 'Rio de Janeiro',
          stateId: 1
        },
        {
          id: 2,
          name: 'Bauru',
          stateId: 2
        },
        {
          id: 3,
          name: 'Londrina',
          stateId: 3
        },
        {
          id: 4,
          name: 'Belo Horizonte',
          stateId: 5
        },
        {
          id: 5,
          name: 'Juiz de Fora',
          stateId: 5
        },
        {
          id: 6,
          name: 'Rio de Bonito',
          stateId: 1
        },
       
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Devices', null, {});
  },
};
