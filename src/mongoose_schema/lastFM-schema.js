var mongoose = require("mongoose");

module.exports = mongoose.model("LastFM", {
	timeStamp : String,
	json : String
});