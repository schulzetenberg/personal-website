var router = require('express').Router();
var request = require('request');
var beautify_js  = require('js-beautify').js_beautify;
var beautify_css = require('js-beautify').css;
var beautify_html = require('js-beautify').html;

router.post('/beautify', function (req, res, next) {
  var text = req.body.text;
  var type = req.body.type;
  var options = '';
  var output = '';
  if(type === 'js'){
    try {
      options = JSON.parse(req.body.options);
    } catch (e){
      options = '';
    }
    try {
      output = beautify_js(text,options);
    } catch (e){
      return res.sendStatus(500);
    }
  } else if(type === 'css'){
    // TODO: implement this
  } else if(type === 'html'){
    // TODO: implement this
  }
  res.json(output);
});

router.get('/collector', function (req, res, next) {
  var app = req.query.app;
  if(!app){
    console.log("App is required.");
    return res.sendStatus(500);
  }

  request({url: "https://collector-schulzetenberg.rhcloud.com/api/" + app}, function(error, response, body) {
    if (error || response.statusCode !== 200) {
      return res.sendStatus(500);
    }
    try {
      var data = JSON.parse(body);
      res.json(data);
    } catch(err){
      console.log(err);
      return res.sendStatus(500);
    }
  });
});

module.exports = router;
