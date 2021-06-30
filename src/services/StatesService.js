const { States } = require('../models');

const createState = async ({ name, uf }) => {
  const state = await States.create({ name, uf });

  return state;
};

const getAllStates = async () => {
  const states = await States.findAll();

  return states;
};

const getStateByUf = async (uf) => {
  const state = await States.findOne({ where: { uf } });

  return state;
};

module.exports = {
    createState,
    getAllStates,
    getStateByUf,
};