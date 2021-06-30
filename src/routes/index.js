const router = require("express").Router();

const stateController = require('../controllers/statesController');

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

module.exports = router;
