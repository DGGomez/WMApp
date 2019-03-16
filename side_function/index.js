
var mongoose = require('./connections/main');
var order = mongoose.model('Data');
var alasql = require('alasql');

function run(){
    //vars
    var list;
    // read values from main db
    order.find({}, function(err, data) {
        if (err)
        //should log these somewhere
          console.log(err);
        var list = data;
      });

    // change connections
    mongoose = require('./connections/archive');
    var new_order = new order(req.body);
    new_order.save(function(err, data) {
        if (err)
            console.log(err);
        console.log(data);
    });
    // create name for excel sheet
    var name = "order-"+Date.now;
    
    //put data in excel sheet
    alasql(`SEARCH / AS @a \
    UNION ALL( \
      introduction AS @b \
      resources / AS @c \
      RETURN(@a->id AS id, @a->name AS name, @a->location AS location, \
        @a->description AS description, @a->date AS date, \
        @a->price AS price \
      ) \
    , \
      objectives AS @b \
      resources / AS @c \
      RETURN(@a->id AS id, @a->name AS name, @a->location AS location, \
        @a->description AS description, @a->date AS date, \
        @a->price AS price \
      ) \
    ) INTO XLSX("${name}.xlsx",{headers:true})\
    FROM ?`,[list]);
}

run();