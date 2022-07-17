const express = require('express');

const app = express();

const port = 3000;

const fs = require('fs');

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});