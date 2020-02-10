const express = require('express');
const userRoute = require('../api/routes/user-routes');

function load(expressApp){
    let app = expressApp;
    let router = express.Router();
    
    app.use(express.json());

    app.use(router);
    app.use('/users', userRoute);
    return app;
  }

module.exports = load;