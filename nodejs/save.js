var request = require('request');
var secrets = require('../config/secrets');
var lastFMSchema = require('../models/lastFM-schema.js');

exports.lastFM = function() {
	var apiKey = secrets.lastFmKey;
    var fromDate = getEpochTime() - getDaysEpoch(90);
    var toDate = getEpochTime();
    var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=waterland15&limit=1&page=1&api_key=" + apiKey + "&format=json&from=" + fromDate + "&to=" + toDate;

	request(url, function (error, response, body) {
  		if (error) {
			console.log(error);
		} 
		else {
			var data = JSON.parse(body);
			var songCount = data.recenttracks['@attr'].total;
			
			var doc = new lastFMSchema({
				songCount: songCount
			});
		
			doc.save(function(err) {
				if (err) console.log(err);
			});	
		}
	});
};

function getEpochTime() {
    return Math.round(new Date().getTime() / 1000.0)
}

//Convert # of days to epoch number
function getDaysEpoch(numDays) {
    return 86400 * numDays;	//86400 is the value for one day
}
