var router = require('express').Router();
var beautify_js  = require('js-beautify').js_beautify;
var beautify_css = require('js-beautify').css;
var beautify_html = require('js-beautify').html;
var moment = require('moment');

var lastFM = require('../models/last-fm-schema');
var goodreads = require('../models/goodreads-schema');
var github = require('../models/github-schema');
var trakt = require('../models/trakt-schema');

router.get('/lastFM', function (req, res, next) {
  lastFM.findOne({}, {}, { sort: { '_id' : -1 } }, function(err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/goodreads', function (req, res, next) {
  goodreads.findOne({}, {}, { sort: { '_id' : -1 } }, function(err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/github', function (req, res, next) {
  github.findOne({}, {}, { sort: { '_id' : -1 } }, function(err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/trakt', function (req, res, next) {
  trakt.findOne({}, {}, { sort: { '_id' : -1 } }).lean().exec(function (err, data){
    if (err) return next(err);

    var startDate = moment('2016-10-02');
    var now = moment();
    var totalDays = now.diff(startDate, 'days');
    data.totalDays = totalDays;

    res.json(data);
  });
});

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

module.exports = router;
