const express = require('express');
const userRoute = require('../api/routes/user-routes');
const authRoute = require('../api/routes/auth-routes');

function load(expressApp){
    let app = expressApp;
    let router = express.Router();
    
    app.use(express.json());

    app.use(router);
    app.use('/users', userRoute);
    app.use('/auth', authRoute);
    
    return app;
  }

module.exports = load;