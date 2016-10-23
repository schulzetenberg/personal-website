var request = require('request');
var parseString = require('xml2js').parseString;
var Q = require('q');

var secrets = require('../config/secrets');
var goodreadsSchema = require('../models/goodreads-schema.js');

var USER_ID = secrets.goodreadsID;
var DEV_KEY = secrets.goodreadsKey;

exports.save = function() {
  booksRead().then(topBooks).then(save).catch(function(err){
    console.log(err);
  });

};

function booksRead(){
  var defer = Q.defer();

  var numDays = 185; //number of books read in the past amount of days
  var pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - numDays);
  var url = "http://www.goodreads.com/review/list/" + USER_ID + "?format=xml&key=" + DEV_KEY + "&sort=shelves&v=2&shelf=read&sort=date_read&per_page=200";

  request(url, function (error, response, body) {
    if (error || response.statusCode !== 200) {
        defer.reject("Get Goodreads read books error");
    } else {
      try {
        var booksRead = [];

        parseString(body, function (err, result) {
          if (err) return defer.reject(err);

          var books = result.GoodreadsResponse.reviews[0].review;

          for (var i=0; i < books.length; i++){
            if (new Date(books[i].read_at).getTime() >= pastDate){
              // Replace m with l to view large photo
              // ex. 1405392994m --> 1405392994l
              // http://d2arxad8u2l0g7.cloudfront.net/books/1405392994m/18595312.jpg
              var img = books[i].book[0].image_url[0];
              var imgSplit = img.split('/');
              if(imgSplit.length === 6){
                imgSplit[4] = imgSplit[4].replace("m", "l");
                img = imgSplit.join('/');
              }
              booksRead.push({
                title: books[i].book[0].title[0],
                img: img,
                pages: books[i].book[0].num_pages[0],
                link: books[i].book[0].link[0],
              });
            }
          }
        });

        defer.resolve(booksRead);

      } catch(err){
        defer.reject(err);
      }
    }
  });

  return defer.promise;
}

function topBooks(booksRead){
  var defer = Q.defer();

  var url = "http://www.goodreads.com/review/list/" + USER_ID + "?key=" + DEV_KEY + "&sort=shelves&v=2&shelf=read&sort=date_read&per_page=200";

  request(url, function (error, response, body) {
    if (error || response.statusCode !== 200) {
        defer.reject("Get Goodreads ratings error");
    } else {
      try {
        var topBooks = [];

        parseString(body, function (err, result) {
          if (err) return defer.reject(err);

          var books = result.GoodreadsResponse.reviews[0].review;

          for (var i=0; i < books.length; i++){
            // Save 6 of the most recently read books rated 5 stars
            if((topBooks.length < 6) && (books[i].rating[0] == 5)){
              // Replace m with l to view large photo
              // ex. 1405392994m --> 1405392994l
              // http://d2arxad8u2l0g7.cloudfront.net/books/1405392994m/18595312.jpg
              var img = books[i].book[0].image_url[0];
              var imgSplit = img.split('/');
              if(imgSplit.length === 6){
                imgSplit[4] = imgSplit[4].replace("m", "l");
                img = imgSplit.join('/');
              }

              topBooks.push({
                title: books[i].book[0].title[0],
                link: books[i].book[0].link[0],
                img: img
              });
            }
          }
        });

        var saveData = {
          booksRead: booksRead,
          topBooks: topBooks
        };
        defer.resolve(saveData);

      } catch(err){
        defer.reject(err);
      }
    }
  });

  return defer.promise;
}

function save(data) {
  var defer = Q.defer();

  var doc = new goodreadsSchema(data);
  doc.save(function(err) {
    if (err) {
      defer.reject(err);
    } else {
      console.log("Saved GoodReads data");
      defer.resolve();
    }
  });

  return defer.promise;
}
