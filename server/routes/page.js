const express = require('express');
const { getPage } = require('../controller/page');
const validator = require('../validators/page');

const router = express.Router({ mergeParams: true });

router.get('/', validator.getPage, getPage);

module.exports = { pageRouter: router };
