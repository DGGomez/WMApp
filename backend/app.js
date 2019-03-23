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
app.use(bodyParser.text());

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
