const express = require('express');
const morgan = require('morgan');
const { MorganStream } = require('../logger');

const AppInitializer = (app) => {
  app.use(morgan('combined', { stream: MorganStream }));
  app.use(express.json());
}

module.exports = { AppInitializer };
