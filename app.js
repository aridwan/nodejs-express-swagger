const loaders = require('./loaders/index');
const express = require('express');

async function startServer() {

    const app = express();
    loaders(app);

    app.listen(process.env.PORT || 3000, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Your server is ready ! on port ${process.env.PORT}`);
    });
  }

startServer();