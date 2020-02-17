const express = require('express');
const userRoute = require('../api/routes/user-routes');
const authRoute = require('../api/routes/auth-routes');

function load(expressApp){
    let app = expressApp;
    let router = express.Router();
    
    app.use(express.json());

    const version = '/api/v1';

    app.use(router);
    app.use(version+'/users', userRoute);
    app.use(version+'/auth', authRoute);
    
    return app;
  }

module.exports = load;