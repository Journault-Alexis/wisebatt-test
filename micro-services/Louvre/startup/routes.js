const express = require('express');


const images = require('../api/images');

const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());


  app.use('/api/images', images);

  app.use(error);
}