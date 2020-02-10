const expressLoader = require('./express');
const swaggerLoader = require('./swagger');
const consulLoader = require('./consul');
require('dotenv').config();

function init(expressApp){
    expressLoader(expressApp);
    console.log('Express Intialized');
    swaggerLoader(expressApp);
    console.log('Swagger UI Loaded');
    consulLoader();
    console.log('Service registered in  Consul');
}

module.exports = init;