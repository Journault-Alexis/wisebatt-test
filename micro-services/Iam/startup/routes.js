const express = require('express');


const users = require('../api/users');
const auth = require('../api/controller.auth');

const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());

  app.use('/api/auth', auth);
  app.use('/api/users', users);

  app.use(error);
}