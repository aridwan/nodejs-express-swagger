const passport = require('passport');

function load(expressApp){
    let app = expressApp;

    app.use(passport.initialize());

    return app;
  }

  module.exports = load;