'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPostsTable = await queryInterface.createTable('Cities', {
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
      stateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'States',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });

    return BlogPostsTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Devices');
  }
};
