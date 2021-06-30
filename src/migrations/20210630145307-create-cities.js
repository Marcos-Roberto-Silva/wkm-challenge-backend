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
      uf: {
        type: Sequelize.STRING,
        references: {
          model: 'States',
          key: 'uf',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });

    return BlogPostsTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Devices');
  }
};
