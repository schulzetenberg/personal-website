var request = require('request');
var Q = require('q');
var fs = require('fs');

var secrets = require('../config/secrets');

// Get updated configuration & save to file for future use
exports.getConfig = function() {

  var options = {
    url: 'https://api.themoviedb.org/3/configuration?api_key=' + secrets.tmdbKey,
    headers: { 'Content-Type': 'application/json' }
  };

  request(options, function (error, response, body) {
    if (error || response.statusCode !== 200) {
      console.log(error);
    } else {
      try {
        body = JSON.parse(body);

        fs.writeFile("./config/tmdb.js", JSON.stringify(body, null, 4), function(err) {
          if(err) {
            return console.log(err);
          }
        });
      } catch (err){
        console.log("unable to parse tmdb response body", err);
      }
    }
  });
  
};
