var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	  res.render('pages/index.html');
});

router.get('/index', function (req, res, next) {
	  res.render('pages/index.html');
});

module.exports = router;
