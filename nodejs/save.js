var lastFMSchema = require('../models/lastFM-schema.js');

exports.lastFM = function() {
	var doc = new lastFMSchema({
		json: "data"
	});

	doc.save(function(err) {
		if (err) console.log(err);
	});
};
