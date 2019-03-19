const express = require('express');
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/basic');
const data = require('./models/dataModel');
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(body-parser.text());

dataRoutes(app);

//connection.end();
module.exports = app;
