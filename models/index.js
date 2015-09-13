var mongoose = require("mongoose");
mongoose.connect( "mongodb://localhost/eshNode");
mongoose.set("debug", true);

module.exports.Org = require("./organization");
module.exports.Purchase = require("./purchase");

