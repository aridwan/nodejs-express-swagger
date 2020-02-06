const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs')

function load(expressApp){
    let app = expressApp;

    const swaggerDocument = yamljs.load('./openapi.yml')

    app.use('/', swaggerUI.serve);
    app.get('/', swaggerUI.setup(swaggerDocument))

    return app;
  }

  module.exports = load;