require('dotenv').config();

const express = require('express');
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/basic');
const data = require('./models/dataModel');
const user = require('./models/userModel');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONFIG);
const db = mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => console.warn('Warning: ', error));
    
dataRoutes(app);

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 10,
      currency: "cad",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

//connection.end();
module.exports = app;
