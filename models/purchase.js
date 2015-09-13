var mongoose = require("mongoose");

var purchaseSchema = new mongoose.Schema({
	bandwidth: Number,
	measure: String,
	cost: Number,
	org: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Org"
				}
});

var Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
