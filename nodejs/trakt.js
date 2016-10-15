var request = require('request');
var secrets = require('../config/secrets');
var traktSchema = require('../models/trakt-schema.js');
var Q = require('q');

exports.save = function() {
  var user = 'waterland15';

  userData(user).then(function(data){
    var doc = new traktSchema({ data: data });
    doc.save(function(err) {
      if (err) console.log(err);
    });
  }).catch(function(err){
    console.log("Caught trakt save error:", err);
  });
};

function userData(user){
  var defer = Q.defer();

  var apiKey = secrets.traktID;
  var options = {
    url: 'https://api.trakt.tv/users/' + user + '/stats',
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': apiKey
    }
  };

  request(options, function (error, response, body) {
    if (error || response.statusCode !== 200) {
      defer.reject(error);
    } else {
      try {
        body = JSON.parse(body);
        defer.resolve(body);
      } catch (e){
        defer.reject("unable to parse trakt response body", e);
      }
    }
  });

  return defer.promise;
}
