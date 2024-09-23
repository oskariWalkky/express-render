require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

const apiRoutes = require('./src/routes/api');  // API routes
const homeRoutes = require('./src/routes/home'); // HTML route

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the `/api` prefix for API routes
app.use('/api', apiRoutes);

// Use the root `/` route for serving the HTML page
app.use('/', homeRoutes);

// Start the server
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

/*
// Enable this to test that the Cloud Translation API is working
const { quickStart } = require('./services/translationService');
quickStart();
*/
