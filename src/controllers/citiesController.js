const citiesService = require('../services/CitiesService');

const createCity = async (request, response) => {
    try {
        const { name, stateId } = request.body;

        const city = await citiesService.createCity({ name, stateId });

        return response.status(201).json(city);

    } catch (error) {
        return response.status(500).json({ message: error });        
    }
};

const getAllCities = async (_request, response) => {
    const cities = await citiesService.getAllCities();
    response.status(200).json(cities);
};

const getCityByName = async (request, response) => {
    const { name } = request.params;

    const city = await citiesService.getCityByName(name);

    response.status(200).json(city);
};

const getCityAndStateByCityName = async (request, response) => {
    const { name } = request.params;

    const city = await citiesService.getCityAndStateByCityName(name);

    response.status(200).json(city);
};

module.exports = { 
    createCity,
    getAllCities,
    getCityByName,
    getCityAndStateByCityName,
};