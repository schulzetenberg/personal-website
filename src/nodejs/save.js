var lastFMSchema = require('../mongoose_schema/lastFM-schema.js');
var lastFMData = require('../mongoose_data/lastFM-data.js')

function saveToDB() {
	var data = {};
	data.timeStamp = "time";
	data.json = "json data";
	
	
	var mongoData = new lastFMData();
	mongoData.fill(data);
	var promise = new lastFMSchema(mongoData.getInformation());
	promise.save();
	console.log("saved to db");
}


module.exports = {saveToDB : saveToDB};