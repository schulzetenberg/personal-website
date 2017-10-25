const router = require('express').Router();
const request = require('request');
const beautify_js  = require('js-beautify').js_beautify;
const beautify_css = require('js-beautify').css;
const beautify_html = require('js-beautify').html;

const logger = require('../nodejs/log');
const secrets = require('../config/secrets');

router.post('/beautify', function(req, res) {
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

router.get('/collector', function(req, res) {
  var app = req.query.app;
  if(!app){
    logger.error("App is required.");
    return res.sendStatus(500);
  }

  request({url: secrets.dataApiUrl + '/api/' + app}, function(err, response, body) {
    if(err || response.statusCode !== 200) {
      logger.error(err);
      return res.sendStatus(500);
    }

    try {
      var data = JSON.parse(body);
      res.json(data);
    } catch(err){
      logger.error(err);
      return res.sendStatus(500);
    }
  });
});

module.exports = router;
