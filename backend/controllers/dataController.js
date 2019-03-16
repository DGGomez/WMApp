'use strict';

const mongoose = require('mongoose');
const order = mongoose.model('Data');

exports.create = function(req, res) {
  var new_order = new order(req.body);
  new_order.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read = function(req, res) {
  order.findById(req.params.Id, function(err, data) {
    if (err){
      // in case where isn't found in this db
      //test in archive db
      // else real error
    }
      
    res.json(data);
  });
};