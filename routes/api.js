var router = require('express').Router();
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

module.exports = router;
