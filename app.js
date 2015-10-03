var express = require('express')
  , route = require('./routes/index')
  , user = require('./routes/user')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');  
app.engine('html', require('ejs').renderFile);  //render html files as ejs

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));

app.use('/', route);

// Handle 404 error
app.use(function(req, res) {
    res.status(400);
   res.render('pages/404.html');
});

// Handle 500 error
app.use(function(error, req, res, next) {
    res.status(500);
   res.render('pages/500.html');
});

