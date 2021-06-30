const { Cities, States } = require("../models");

const createCity = async ({ name, stateId }) => {
  const city = await Cities.create({ name, stateId });

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

module.exports = {
  createCity,
  getAllCities,
  getCityByName,
  getCityAndStateByCityName,
};
