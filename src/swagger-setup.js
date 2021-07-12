const gitHub ="https://github.com/Marcos-Roberto-Silva"

const swaggerDefinition = {
  info: {
    title: "REST API WorkingMinds",
    description: `REST Node API for manage Cities and States. ${gitHub}`,
  },
  servers: ["http://localhost:3000"],
};

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};

/**
 * @param {express} app
 */

const setup = (app) =>
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsDoc(swaggerOptions))
  );

module.exports = setup;
