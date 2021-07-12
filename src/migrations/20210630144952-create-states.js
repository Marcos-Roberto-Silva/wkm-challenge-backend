"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const states = await queryInterface.createTable("States", {
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    return states;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('States');
  },
};
