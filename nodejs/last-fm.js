var request = require('request');
var Q = require('q');
var secrets = require('../config/secrets');
var lastFMSchema = require('../models/last-fm-schema');
var time = require('./time');

var apiKey = secrets.lastFmKey;
var fromDate = time.getEpochTime() - time.getDaysEpoch(90);
var toDate = time.getEpochTime();

exports.save = function() {
	topArtists().then(recentTracks).catch(function(err){
		console.log("Caught lastFM error", err);
	});
};

function topArtists() {
	var defer = Q.defer();
    var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=waterland15&limit=15&page=1&api_key=" + apiKey + "&format=json&from=" + fromDate + "&to=" + toDate;

	var temp = [];
	request(url, function (error, response, body) {
		if (error || response.statusCode !== 200) {
			defer.reject("Get LastFM top artists error");
		} else {
			try {
				var data = JSON.parse(body);
				if(!data || !data.topartists || !data.topartists.artist || !data.topartists.artist.length) return console.log("Could not parse top artist data");
				console.log(data.topartists.artist);
				console.log(data.topartists.artist.length);
				var artistData = data.topartists.artist;

				for (var i=0; i < artistData.length; i++){
					temp.push({
						artist: artistData[i].name,
						img: artistData[i].image[2]['#text'] // IMAGE SIZES: 0 = S, 1 = M, 2 = L, 3 = XL, 4 = Mega
					});
				}
				defer.resolve(temp);
			} catch(err){
				defer.reject(err);
			}
		}
	});
	return defer.promise;
}

function recentTracks(topArtists) {
	var defer = Q.defer();
    var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=waterland15&limit=1&page=1&api_key=" + apiKey + "&format=json&from=" + fromDate + "&to=" + toDate;

	request(url, function (error, response, body) {
  		if (error || response.statusCode !== 200) {
			defer.reject("Get LastFM data error");
		} else {
			try {
				var data = JSON.parse(body);
				if(!data || !data.recenttracks || !data.recenttracks['@attr']) return console.log("Could not parse recent tracks data");
				var songCount = data.recenttracks['@attr'].total;

				var doc = new lastFMSchema({
					songCount: songCount,
					topArtists: topArtists
				});
				doc.save(function(err) {
					if (err) {
						defer.reject(err);
					} else {
						defer.resolve();
					}
				});
			} catch(err){
				defer.reject(err);
			}
		}
	});
}
