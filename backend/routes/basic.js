const express = require('express');

module.exports = function(app, db) {
var dataList = require('../controllers/dataController');

app.route('/create')
    .post(dataList.create);

app.route('/read')
    .post(dataList.read);
    
app.route('/archive')
    .post(dataList.archive);
}
