"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          id: 1,
          name: 'Rio de Janeiro',
          cep: 22030010,
          uf: 'RJ',
        },
        {
          id: 2,
          name: 'Bauru',
          cep: 36010011,
          uf: 'SP',
        },
        {
          id: 3,
          name: 'Londrina',
          cep: 36010,
          uf: 'PR',
        },
        {
          id: 4,
          name: 'Belo Horizonte',
          cep: 36010001,
          uf: 'MG',
        },
        {
          id: 5,
          name: 'Juiz de Fora',
          cep: 25821070,
          uf: 'MG',
        },
        {
          id: 6,
          name: 'Rio de Bonito',
          cep: 2880000,
          uf: 'RJ',
        },
       
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Devices', null, {});
  },
};
