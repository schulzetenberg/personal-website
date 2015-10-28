var lastFMSchema = require('../mongoose_schema/lastFM-schema.js');
var lastFMData = require('../mongoose_data/lastFM-data.js')
var moment = require('moment');

function lastFM() {
	var currentTime = moment();
	var data = {};
	data.timeStamp = currentTime.valueOf();
	console.log(data.timeStamp);
	data.json = "json data";
	
	
	var mongoData = new lastFMData();
	mongoData.fill(data);
	var promise = new lastFMSchema(mongoData.getInformation());
	promise.save();
	console.log("saved to db");
}


module.exports = {lastFM : lastFM};