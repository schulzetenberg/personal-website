var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	  res.render('pages/index.html');
});

router.get('/index', function (req, res, next) {
	  res.render('pages/index.html');
});

router.get('/about', function (req, res, next) {
	  res.render('pages/about.html');
});

router.get('/album-art', function (req, res, next) {
	  res.render('pages/album-art.html');
});

router.get('/coming-soon', function (req, res, next) {
	  res.render('pages/coming-soon.html');
});

router.get('/projects', function (req, res, next) {
	  res.render('pages/projects.html');
});

router.get('/senior-design', function (req, res, next) {
	  res.render('pages/senior-design.html');
});

router.get('/website', function (req, res, next) {
	  res.render('pages/website.html');
});

router.get('/beautify', function (req, res, next) {
	  res.render('pages/beautify.html');
});

router.get('/404', function (req, res, next) {
	  res.render('pages/404.html');
});

router.get('/500', function (req, res, next) {
	  res.render('pages/500.html');
});

module.exports = router;
