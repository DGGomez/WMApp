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
    console.log("1");
    if (err){
      res.send(err);
    }
    console.log("2");

    orders.find(req.body.location, function(err, data) {
      console.log("3");

      if (err){
        console.log("4");

        mongoose.connection.db.collection("Archive", function(err,archives){
          archives.find(req.body.location, function(err, data) {
            res.json(data);
          });
          })
        }
        res.json(data);
  });
});
}