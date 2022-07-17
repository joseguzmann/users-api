// Import express
const express = require('express');

// Instantiate express
const app = express();

const port = 3000;

// Import fs to work with files
const fs = require('fs');

// Import routes
const routes = require('./routes/routes.js')(app, fs);

// Start app
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});