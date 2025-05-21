const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'UMC Week8 API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'], // Swagger 주석 대상
};

const specs = swaggerJsdoc(options);
module.exports = specs;
