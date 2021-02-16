const express = require('express');
const { json } = require('body-parser');
const todosRoute = require('./routes/todos');

const app = express();
app.use(json());

app.use('/', todosRoute);

module.exports = app;
