const citiesService = require('../services/CitiesService');

const createCity = async (request, response) => {
  
        const { name, cep, uf } = request.body;

        const city = await citiesService.createCity({ name, cep, uf });
       
        if (city.code) {
            return response.status(city.code).json({ message: city.message, status: false });
        }

        return response.status(201).json({ message: 'Cidade cadastrada com sucesso.', status: true });
};

const getAllCities = async (_request, response) => {
    const cities = await citiesService.getAllCities();
    response.status(200).json(cities);
};

const searchCity = async (request, response) => {
    const { cep } = request.params;

    const city = await citiesService.citySearch({ cep });

    if (city.code) {
        response.status(city.code).json(city.message);
    }
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
    searchCity,
};