'use strict';
var mongoose = require('mongoose');
var order = mongoose.model('Data');

exports.create = function(req, res) {
  var new_order = new order (
    req.body
  );
  mongoose.connection.db.collection("Orders", function(err,collection){
    if (err)
        res.send(err);
    collection.insertOne(new_order,function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  });

};

exports.read = function(req, res) {
var status = 0;
  mongoose.connection.db.collection("Orders", function(err,orders){
    if (err){
      res.send(err);
    }
    orders.find({location: req.body.location}).toArray(function(err, data) {
      if (err){
        res.send(err);
      }

        res.json(data);
      
  });
});

}
exports.archive = function(req, res) {
  var location = req.body.location;
  mongoose.connection.db.collection("Archive", function(err,archives){
    if (err){
      res.send(err);
    }
    archives.find({location: location}).toArray(function(err, data) {
      if (err){
        res.send(err);
      }
      res.json(data);
    });
    })
  
}