const statesService = require('../services/StatesService');

const createState = async (request, response) => {
    try {
        const { name, uf } = request.body;

        const state = await statesService.createState({ name, uf });

        return response.status(201).json(state);

    } catch (error) {
        return response.status(500).json({ message: error });        
    }
};

module.exports = { 
    createState,
};