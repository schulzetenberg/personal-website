var request = require('request');
var parseString = require('xml2js').parseString;
var secrets = require('../config/secrets');
var goodreadsSchema = require('../models/goodreads-schema.js');

exports.save = function() {
	var USER_ID = secrets.goodreadsID;
	var DEV_KEY = secrets.goodreadsKey;
	var numDays = 185; //number of books read in the past amount of days
	var pastDate = new Date();
	pastDate.setDate(pastDate.getDate() - numDays);
	var url = "http://www.goodreads.com/review/list/" + USER_ID + "?format=xml&key=" + DEV_KEY + "&sort=shelves&v=2&shelf=read&sort=date_read&per_page=200";

	request(url, function (error, response, body) {
  		if (error || response.statusCode !== 200) {
			console.log("Get Goodreads data error");
		} else {
			try {
        var saveData = { books: [] };

				parseString(body, function (err, result) {
          if (err) return console.log(err);

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
              saveData.books.push({
                title: books[i].book[0].title[0],
                img: img,
                pages: books[i].book[0].num_pages[0],
                link: books[i].book[0].link[0],
              });
            }
          }
        });

				var doc = new goodreadsSchema(saveData);
				doc.save(function(err) {
					if (err) console.log(err);
				});
			} catch(err){
				console.log(err);
			}
		}
	});
};
