const express = require('express');
const parser = require('body-parser');

const api = express();
api.use(parser.json());

//routes
api.use(require('./routes/index'));

const puerto = 5000;
api.listen(puerto, function () {
	console.log('api-resta is running on port', puerto);
});

module.exports = api;
