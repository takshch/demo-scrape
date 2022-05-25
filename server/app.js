const express = require('express');
const { AppInitializer } = require('./appInitializer');
const { router } = require('./routes/index');

const app = express();

AppInitializer(app);

app.use(router);

module.exports = { app };
