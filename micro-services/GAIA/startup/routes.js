const express = require('express');


const entities = require('../api/entities');


const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());

  app.use('/api/entities', entities);

  app.use(error);
}