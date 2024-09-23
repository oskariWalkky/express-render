const express = require('express');
const router = express.Router();
const { renderHome } = require('../controllers/homeController.js');

router.get('/', renderHome);

module.exports = router;
