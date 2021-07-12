const router = require("express").Router();
const { body } = require("express-validator");

const stateController = require("../controllers/statesController");
const cityController = require("../controllers/citiesController");
const validator = require("../middleawares/middleFieldValidator");

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
 *        description: It saves a state in the list. Please write the UF sigle in uppercase characters.
 
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

router.post(
  "/states",
  body("name").isString().isLength({ min: 4, max: 100 }),
  body("uf").isString().isLength({ min: 2, max: 2 }),
  validator,
  stateController.createState
);

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

router.get("/states", stateController.getAllStates);

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

router.get("/states/:uf", stateController.getStateByUf);

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

router.post("/cities",
  body("name").isString().isLength({ min: 4, max: 100 }),
  body("cep").not().isString(),
  body("uf").isString().isLength({ min: 2, max: 2 }),
  validator,
  cityController.createCity
);

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

router.get("/cities", cityController.getAllCities);

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

router.get("/cities/:cep", cityController.searchCity);

module.exports = router;
