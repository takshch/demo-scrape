const express = require('express');
const { pageRouter } = require('./page');

const router = express.Router();

router.use('/page', pageRouter);

// handles 404 NOT FOUND
router.use((_, res) => {
  res.sendStatus(404);
});

module.exports = { router };
