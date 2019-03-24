'use strict';
var mongoose = require('mongoose');
var order = mongoose.model('Data');

exports.create = function(req, res) {
  var new_order = new order (
    req.body
  );

  console.log(new_order);
  new_order.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read = function(req, res) {
  order.findById(req.body.Id, function(err, data) {
    if (err){
      mongoose = require('../connections/archive');
      order = mongoose.model('Data');      // in case where isn't found in this db
      //test in archive db
      order.findById(req.params.Id, function(err, data) {
        if (err){
      // else real error
          res.send(err); 
        }
        res.json(data);
    });
  }
    res.json(data);
  });
};