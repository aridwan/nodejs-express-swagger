const expressLoader = require('./express');
const swaggerLoader = require('./swagger');
const consulLoader = require('./consul');
const passportLoader = require('./passport');
require('dotenv').config();

function init(expressApp){
    expressLoader(expressApp);
    console.log('Express Intialized');
    swaggerLoader(expressApp);
    console.log('Swagger UI Loaded');
    consulLoader();
    console.log('Service registered in  Consul');
    passportLoader(expressApp);
    console.log('Passport Loaded');
}

module.exports = init;