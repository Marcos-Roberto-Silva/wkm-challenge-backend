const { States } = require('../models');
const { stateAlreadyRegitered: message } = require("../utils/messageError");
const { Unauthorized: code } = require("../utils/httpStatus");

const createState = async ({ name, uf }) => {

    const errorMessage = { message, code };

    const result = await States.findOne({ where: { uf } });

    if ( result && result.uf === uf) {
      return errorMessage;
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