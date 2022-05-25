const express = require('express');

const AppInitializer = (app) => {
  app.use(express.json());
}

module.exports = { AppInitializer };
