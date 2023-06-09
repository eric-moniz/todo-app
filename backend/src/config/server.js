const port = 3003;

const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

//  Middlewares
// analisa o json
server.use(bodyParser.json());
// middleware usado para o parser de formulários
server.use(bodyParser.urlencoded({ extended: true }));
// habilitando o CORS
server.use(allowCors);

// inicinado o backend
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
