const { Cities, States } = require("../models");

const createCity = async ({ name, uf }) => {
  const city = await Cities.create({ name, uf });
  return city;
};

const getAllCities = async () => {
  const cities = await Cities.findAll();

  return cities;
};

const getCityByName = async (name) => {
  const city = await Cities.findOne({ where: { name } });

  return city;
};

const getCityAndStateByCityName = async (name) => {
  const city = await Cities.findOne({
    where: { name },
    include: [{ association: "state", required: true }],
  });

  return city;
};

const updateCity = async ({ nParam, name, ufBody }) => {

  const state = await States.findOne({ where: { uf: ufParam } }).then( async (state) => {

    const stateUpdated = await state.update({ name, uf: ufBody });
  
     return stateUpdated;
  });
 
  return state;
};

module.exports = {
  createCity,
  getAllCities,
  getCityByName,
  getCityAndStateByCityName,
};
