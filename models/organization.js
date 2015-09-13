var mongoose = require("mongoose");

var orgSchema = new mongoose.Schema({
	name: String,
	ben: String,
	purchases: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Purchases"
	}] 
})
var Org = mongoose.model("Org", orgSchema);
module.exports = Org;