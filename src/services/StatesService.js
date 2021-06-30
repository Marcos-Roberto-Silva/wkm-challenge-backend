const { States } = require('../models');

const createState = async ({ name, uf }) => {
  const state = await States.create({ name, uf });

  return state;
};

module.exports = {
    createState,
};