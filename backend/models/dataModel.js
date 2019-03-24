'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  name: {
    type: String,
    required: 'Name of costumer'
  },
  location: {
    type: String,
    required: 'Where will this be sent'
  },
  description: {
    type: String,
    required: 'Product'
  },
  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: String,
    required: 'Price payed'
  }
});

module.exports = mongoose.model('Data', DataSchema);