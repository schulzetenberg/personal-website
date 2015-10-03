var express = require('express')
  , route = require('./routes/index')
  , logger = require('morgan')
  , path = require('path');

var app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');  
app.engine('html', require('ejs').renderFile);  //render html files as ejs
app.use('/', route);

// Handle 404 error
app.use(function(req, res) {
    res.status(400);
   res.render('pages/404.html');
});

// Development error handler, will print stacktrace
// TODO: test this 500 error
if (app.get('env') === 'development') {
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error'+ err.message );
});
}
// Handle 500 error
app.use(function(error, req, res, next) {
    res.status(500);
   res.render('pages/500.html');
});

module.exports = app;