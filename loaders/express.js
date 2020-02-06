const express = require('express');

function load(expressApp){
    let app = expressApp;
    let router = express.Router();
    
    app.use(express.json());
    
    app.use(router);

    return app;
  }

module.exports = load;