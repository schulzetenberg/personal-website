var request = require('request');
var parseString = require('xml2js').parseString;
var secrets = require('../config/secrets');
var lastFMSchema = require('../models/lastFM-schema.js');
var goodreadsSchema = require('../models/goodreads-schema.js');
var githubSchema = require('../models/github-schema.js');
var Q = require('q');

exports.lastFM = function() {
	var apiKey = secrets.lastFmKey;
    var fromDate = getEpochTime() - getDaysEpoch(90);
    var toDate = getEpochTime();
    var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=waterland15&limit=1&page=1&api_key=" + apiKey + "&format=json&from=" + fromDate + "&to=" + toDate;

	request(url, function (error, response, body) {
  		if (error || response.statusCode !== 200) {
			console.log("Get LastFM data error");
		}
		else {
			try{
				var data = JSON.parse(body);
				var songCount = data.recenttracks['@attr'].total;
				
				var doc = new lastFMSchema({ songCount: songCount });
				doc.save(function(err) {
					if (err) console.log(err);
				});	
			}
			catch(err){
				console.log(err);
			}
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

exports.goodreads = function() {
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
		} 
		else {
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
			}
			catch(err){
				console.log(err);
			}
		}
	});
};


exports.github = function() {
	var user = secrets.githubUser;
	var githubToken = secrets.githubToken;
	var promises = [userData(),contribData()];
	Q.all(promises).then( function(data){
		var doc = new githubSchema({ 
			repos: data[0].public_repos,
			contribSvg: data[1]
		});
		doc.save(function(err) {
			if (err) console.log(err);
		});	
	});
	
	function userData(){
		var defer = Q.defer();
		var options = {
			url: "https://api.github.com/users/" + user + "?access_token=" + githubToken,
			headers: { 'User-Agent': 'GitHub User:' + user }
		};

		request(options, function (error, response, body) {
			if (error || response.statusCode !== 200) {
				console.log("Get github data error");
				if(response) console.log(response);
				console.log(error);
				defer.reject(error);
			} 
			else {
				try {
					body = JSON.parse(body);
					defer.resolve(body);
				} catch (e){
					console.log("unable to parse github response body",e);
					defer.reject(e);
				}
			}
		});
		return defer.promise;
	}

	function contribData(){
		var defer = Q.defer();
		var optionsContrib = { url: "https://github.com/users/" + user + "/contributions" };
	
		request(optionsContrib, function (error, response, body) {
			if (error || response.statusCode !== 200) {
				console.log("Get github data error");
				if(response) console.log(response);
				console.log(error);
				defer.reject(error);
			} 
			else {
				defer.resolve(body);
			}
		});
		return defer.promise;
	}

};
