const statesService = require('../services/StatesService');

const createState = async (request, response) => {
 
        const { name, uf } = request.body;
   
        const state = await statesService.createState({ name, uf });
    
        if (state.code) {

            if (state.message) {
                return response.status(state.code).json({ message: state.message, status: false });
            }
           
        } else {
            return response.status(201).json({ message: 'Estado Cadastrado com sucesso.', status: true});
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