"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          id: 1,
          name: 'Rio de Janeiro',
          uf: 'RJ',
        },
        {
          id: 2,
          name: 'Bauru',
          uf: 'SP',
        },
        {
          id: 3,
          name: 'Londrina',
          uf: 'PR',
        },
        {
          id: 4,
          name: 'Belo Horizonte',
          uf: 'MG',
        },
        {
          id: 5,
          name: 'Juiz de Fora',
          uf: 'MG',
        },
        {
          id: 6,
          name: 'Rio de Bonito',
          uf: 'RJ',
        },
       
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Devices', null, {});
  },
};
