const statesService = require('../services/StatesService');

const createState = async (request, response) => {
    try {
        const { name, uf } = request.body;

        const state = await statesService.createState({ name, uf });
    
        if (state.code) {
            return response.status(state.code).json(state.message );
        } else {
            return response.status(201).json(state);
        }

    } catch (error) {
     
        return response.status(500).json({ message: error });        
    }
};

const getAllStates = async (_request, response) => {
    const states = await statesService.getAllStates();
    response.status(200).json(states);
};

const getStateByUf = async (request, response) => {
    const { uf } = request.params;

    const state = await statesService.getStateByUf(uf);

    if (state.code) {
        return response.status(state.code).json(state.message);
    }
    
    response.status(200).json(state);
};

module.exports = { 
    createState,
    getAllStates,
    getStateByUf,
};