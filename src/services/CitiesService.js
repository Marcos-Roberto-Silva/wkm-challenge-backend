const { Cities, States } = require("../models");
const { cityAlreadyRegitered: message } = require("../utils/messageError");
const { Unauthorized: code } = require("../utils/httpStatus");

const createCity = async ({ name, cep, uf }) => {
  const errorMessage = { message, code };

  const result = await Cities.findOne({ where: { cep } });

  if (result && result.cep === cep) {
    return errorMessage;
  }

  const city = await Cities.create({ name, cep, uf });

  return city;
};

const getAllCities = async () => {
  const cities = await Cities.findAll();

  return cities;
};

const citySearch = async ({ name, cep }) => {
  const errorMessage = { message: "City not registered", code: 401 };
  const city = await Cities.findOne({ where: { cep } });

  if (city == null) {
    return errorMessage;
  }

  return city;
};

const getCityAndStateByCityName = async (name) => {
  const city = await Cities.findOne({
    where: { name },
    include: [{ association: "state", required: true }],
  });

  return city;
};

const deleteCity = async ({ cep }) => {
  const deletedCity = await Cities.destroy({ where: { cep } });
  return deletedCity;
};

const updateCity = async ({ nParam, name, ufBody }) => {
  const state = await States.findOne({ where: { uf: ufParam } }).then(
    async (state) => {
      const stateUpdated = await state.update({ name, uf: ufBody });

      return stateUpdated;
    }
  );

  return state;
};

module.exports = {
  createCity,
  getAllCities,
  citySearch,
  updateCity,
  deleteCity,
};
