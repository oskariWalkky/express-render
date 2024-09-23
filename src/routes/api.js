const express = require('express');
const router = express.Router();
const { translate, testQuickStart } = require('../controllers/translationController.js');

// Define an API route for translations
router.post('/translate', translate); // POST /api/translate

// Use to test that the API is connected to Cloud Translation
router.get('/testQuickStart', testQuickStart);

module.exports = router;
