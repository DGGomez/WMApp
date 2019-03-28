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
  console.log(req);
  mongoose.connection.db.collection("Orders", function(err,orders){
    if (err){
      res.send(err);
    }

    orders.find({location: req.body.location}).toArray(function(err, data) {

      if (err){

        mongoose.connection.db.collection("Archive", function(err,archives){
          if (err){
            res.send(err);
          }
          archives.find({location: req.body.location}).toArray(function(err, data) {
            if (err){
              res.send(err);
            }
            res.json(data);
          });
          })
        }
        res.json(data);
  });
});
}