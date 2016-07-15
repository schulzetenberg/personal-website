var express = require('express');
var lessMiddleware = require('less-middleware');
var cookieParser = require('cookie-parser');
var compress = require('compression');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var logger = require('morgan');
var methodOverride = require('method-override');
var path = require('path');
var mongoose = require('mongoose');
var nodeSchedule = require('node-schedule');

/**
 * Development options
 */
var publicOpts = {maxAge: 0}; // No cached content
var lessDebug = true;
var lessCompileOnce = true;

/**
 * Create Express server.
 */
var app = express();

/**
 * Connect to MongoDB.
 */
var mongoDB = require('./nodejs/db.js');

var save = require('./nodejs/save');
nodeSchedule.scheduleJob('10 0 0 * * *', save.lastFM); // Run daily
nodeSchedule.scheduleJob('5 0 0 * * *', save.goodreads); // Run daily
nodeSchedule.scheduleJob('0 0 0 * * *', save.github); // Run daily

/**
 * Express configuration.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);  //render html files as ejs
app.use(compress());
app.use(logger('dev', {
	skip: function (req, res) { return res.statusCode < 400 } // log only HTTP request errors
}));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());

if (app.get('env') === 'production') {
	publicOpts = { maxAge: 86400000 }; // Max age of 1 day for static content
	lessDebug = false;
	lessCompileOnce = false;
}
app.use(lessMiddleware(path.join(__dirname, 'build','less'), {
  dest: path.join(__dirname, 'public'),
	once: lessCompileOnce,
	debug: lessDebug
}));

app.use(express.static(path.join(__dirname, 'public'), publicOpts));

var route = require('./routes/index');
var apiRoute = require('./routes/api');
app.use('/', route);
app.use('/api', apiRoute);

if (app.get('env') === 'production') {
	//catch 404 and forward to error handler
	app.use(function(req, res, next) {
		res.render('404.html', {title: "404"});
	});
	// production error handler,  no stacktraces shown
	app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('500.html', {
	        message: err.message,
	        error: {},
	        title : "500"
	    });
	});
} else {
	app.use(errorHandler()); // Display stack trace in dev
}

module.exports = app;
