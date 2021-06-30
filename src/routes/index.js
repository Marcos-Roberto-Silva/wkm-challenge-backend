const router = require("express").Router();

const stateController = require('../controllers/statesController');
const cityController = require('../controllers/citiesController');

/**
 * @swagger
 * /states:
 *  post:
 *    tags: [States]
 *    description: Use to insert a new state
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: states
 *        description: It saves a state in the list.
 *        required: true
 *          - name
 *          - uf
 *        properties:
 *          name:
 *              type: string
 *          uf: 
 *              type: string
 *    responses:
 *      '201':
 *        description: Created
 */

router.post("/states", stateController.createState);

/**
 * @swagger
 * /states:
 *  get:
 *    tags: [States]
 *    description: It lists all states.
 *    responses:
 *      '200':
 *        description: OK.
 */

router.get('/states', stateController.getAllStates);

/**
 * @swagger
 * /states/{uf}:
 *  get:
 *    tags: [States]
 *    parameters:
 *    - in: path
 *      name: uf
 *      required: true
 *      type: integer
 *      minimum: 1
 *      description: It lists a state by its uf 
 *    responses:
 *      '200':
 *        description: OK.
 */

 router.get('/states/:uf', stateController.getStateByUf);

/**
 * @swagger
 * /cities:
 *  post:
 *    tags: [Cities]
 *    description: Use to insert a new city
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: city
 *        description: It saves a city in the list.
 *        required: true
 *          - name
 *          - stateId
 *        properties:
 *          name:
 *              type: string
 *          stateId: 
 *              type: number
 *    responses:
 *      '201':
 *        description: Created
 */

router.post("/cities", cityController.createCity);

/**
 * @swagger
 * /cities:
 *  get:
 *    tags: [Cities]
 *    description: It lists all cities.
 *    responses:
 *      '200':
 *        description: OK.
 */

 router.get('/cities', cityController.getAllCities);

/**
 * @swagger
 * /states/{uf}:
 *  get:
 *    tags: [States]
 *    parameters:
 *    - in: path
 *      name: uf
 *      required: true
 *      type: integer
 *      minimum: 1
 *      description: It lists a state by its uf 
 *    responses:
 *      '200':
 *        description: OK.
 */

 router.get('/cities/:name', cityController.getCityByName);
 router.get('/citiesState/:name', cityController.getCityAndStateByCityName);
 router.get('/citiesState/:name', cityController.getCityAndStateByCityName);

module.exports = router;
