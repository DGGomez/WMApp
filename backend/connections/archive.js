var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONFIG||'mongodb://localhost/Archive');
module.exports = exports = mongoose;