var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONFIG||'mongodb://localhost/Test');
module.exports = exports = mongoose;