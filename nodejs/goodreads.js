var request = require('request');
var parseString = require('xml2js').parseString;
var secrets = require('../config/secrets');
var goodreadsSchema = require('../models/goodreads-schema.js');

exports.save = function() {
	var USER_ID = secrets.goodreadsID;
	var DEV_KEY = secrets.goodreadsKey;
	var numDays = 90; //number of books read in the past amount of days
	var pastDate = new Date();
	var bookCount = 0;
	pastDate.setDate(pastDate.getDate() - numDays);
	var url = "http://www.goodreads.com/review/list/" + USER_ID + "?format=xml&key=" + DEV_KEY + "&sort=shelves&v=2&shelf=read&sort=date_read&per_page=200";

	request(url, function (error, response, body) {
  		if (error || response.statusCode !== 200) {
			console.log("Get Goodreads data error");
		} else {
			try{
				parseString(body, function (err, result) {
					var books = result.GoodreadsResponse.reviews[0].review;
					for (var i=0; i < books.length; i++){
						 if (new Date(books[i].read_at).getTime() >= pastDate){
							 bookCount++;
						 }
					}
				});
				var doc = new goodreadsSchema({ bookCount: bookCount });
				doc.save(function(err) {
					if (err) console.log(err);
				});
			} catch(err){
				console.log(err);
			}
		}
	});
};
