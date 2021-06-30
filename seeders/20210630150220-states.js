"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "States",
      [
        {
          id: 1,
          name: "Rio de Janeiro",
          uf: 'RJ'
        },
        {
          id: 2,
          name: "São Paulo",
          uf: 'SP'
        },
        {
          id: 3,
          name: "Paraná",
          uf: 'PR'
        },
        {
          id: 4,
          name: "Santa Catarina",
          uf: 'SC'
        },
        {
          id: 5,
          name: "Minas Gerais",
          uf: 'MG'
        },
      ],
      {
        timestamps: false
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('States', null, {});
  },
};
