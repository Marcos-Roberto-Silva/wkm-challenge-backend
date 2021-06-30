"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const states = await queryInterface.createTable("States", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
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
