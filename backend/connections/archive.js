var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONFIG_2||'mongodb://localhost/Archive');
module.exports = exports = mongoose;