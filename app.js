'use strict';

// super simple express server


// declare requirements
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// declare the express app
const app = express();

app.get('/status', (req, res, next) => {
  res.status(200).send('Server OK')
});

module.exports = {
  app, 
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running!');
    });
  }
}