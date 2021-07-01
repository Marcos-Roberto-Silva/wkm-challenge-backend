const { States } = require('../models');

const createState = async ({ name, uf }) => {
    const data = { message: 'State already registered', code: 401 }
    const result = await States.findOne({ where: { uf } });

    if ( result.uf === uf) {
      return data;
    }

  const state = await States.create({ name, uf });
  return state;
};

const getAllStates = async () => {
  const states = await States.findAll();

  return states;
};

const getStateByUf = async (uf) => {
  const data = { message: 'State not registered', code: 401 }

  const state = await States.findOne({ where: { uf } });
 
  if (state === null) {
    return data;
  }

  return state;
};

module.exports = {
    createState,
    getAllStates,
    getStateByUf,
};