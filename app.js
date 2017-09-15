let express = require('express');
let cookieParser = require('cookie-parser');
let compress = require('compression');
let favicon = require('serve-favicon');
let bodyParser = require('body-parser');
let errorHandler = require('errorhandler');
let logger = require('morgan');
let methodOverride = require('method-override');
let path = require('path');

// Development options
let publicOpts = {maxAge: 0}; // No cached content
let lessDebug = true;
let lessCompileOnce = true;

var app = express();

// Connect to MongoDB.
require('./nodejs/db');

app.use(compress());
app.use(logger('dev', {
  skip: function (req, res) { return res.statusCode < 400; } // log only HTTP request errors
}));
app.use(favicon(path.join(__dirname, 'src/assets/img', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cookieParser());

if (app.get('env') === 'production') {
  publicOpts = { maxAge: 86400000 }; // Max age of 1 day for static content
  lessDebug = false;
  lessCompileOnce = false;
}
app.use(express.static(path.join(__dirname, 'public'), publicOpts));
app.use(express.static(path.join(__dirname, 'dist'))); // ng2 files

let apiRoute = require('./routes/api');
app.use('/api', apiRoute);

// Root webpage
app.get('/', (req, res) => {
  res.render('index.html');
});

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
