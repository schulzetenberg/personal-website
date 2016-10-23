var request = require('request');
var secrets = require('../config/secrets');
var githubSchema = require('../models/github-schema.js');
var Q = require('q');

exports.save = function() {
  var user = secrets.githubUser;
  var githubToken = secrets.githubToken;
  var promises = [userData(),contribData()];

  Q.all(promises).then(function(data){
    var doc = new githubSchema({
      repos: data[0].public_repos,
      contribSvg: data[1]
    });

    doc.save(function(err) {
      if (err) console.log(err);
    });
  }).catch(function(err){
    console.log("Caught github save error:", err);
  });

  function userData(){
    var defer = Q.defer();

    var options = {
      url: "https://api.github.com/users/" + user + "?access_token=" + githubToken,
      headers: { 'User-Agent': 'GitHub User:' + user }
    };

    request(options, function (error, response, body) {
      if (error || response.statusCode !== 200) {
        defer.reject(error);
      } else {
        try {
          body = JSON.parse(body);
          defer.resolve(body);
        } catch (e){
          defer.reject("unable to parse github response body", e);
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
        defer.reject(error);
      } else {
        defer.resolve(body);
      }
    });
    
    return defer.promise;
  }

};
