"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "States",
      [
        {
          uf: 'RJ',
          name: "Rio de Janeiro",
        },
        {
          uf: 'SP',
          name: "São Paulo",
        },
        {
          uf: 'PR',
          name: "Paraná",
        },
        {
          uf: 'SC',
          name: "Santa Catarina",
        },
        {
          uf: 'MG',
          name: "Minas Gerais",
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
