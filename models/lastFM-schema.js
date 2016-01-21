var mongoose = require("mongoose");

module.exports = mongoose.model("LastFM", {
	json : String
},
{timestamps: { createdAt: 'created_at' } } // Auto added by mongoose
);
