app.controller('aboutCtrl', function($scope, $http, $sce, $timeout) {

  $.fn.spectragram.accessData = {
    accessToken: '23102384.aad9174.ca58d8df7eac42e095ffb55b6f1cf52a',
    clientID: 'aad9174904814991a8e5a16cff50cdde'
  };

  $('.instafeed').each(function () {
    $(this).children('ul').spectragram('getUserFeed', {
      max: 6,
      size: 'medium',
      query: 'schulzetenberg'
    });
  });

  $(window).load(function(){
    $('#tweets').flexslider({ directionNav: false, controlNav: false });
  });

  var twitterConfig = {
    "id": '617415300229677056',
    "domId": '',
    "maxTweets": 5,
    "enableLinks": true,
    "showUser": true,
    "showTime": true,
    "dateFunction": '',
    "showRetweet": false,
    "customCallback": handleTweets,
    "showInteraction": false
  };

  twitterFetcher.fetch(twitterConfig);

  function handleTweets(tweets){
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('tweets');
    var html = '<ul class="slides">';
    while(n < x) {
    html += '<li>' + tweets[n] + '</li>';
    n++;
    }
    html += '</ul>';
    element.innerHTML = html;
  }

  var getConfig = {};
  $http.get("../api/collector?app=music", getConfig).then(function(response){
    $scope.lastFM = response.data;

    var topArtists = response.data.topArtists;
    if(topArtists){
      $scope.genresList = $sce.trustAsHtml(genres(topArtists));

      var artistsList = '';
      for(var i=0; i < topArtists.length; i++){
        if(i%2){
          artistsList += '<b>' + topArtists[i].artist + '. </b>';
        } else {
          artistsList += topArtists[i].artist + '.  ';
        }
      }
      $scope.artistsList =  $sce.trustAsHtml(artistsList);

      // Pull out top artist to set in center of collage
      $scope.topArtist = topArtists[0];
      topArtists.splice(0, 1);

      $scope.topArtists = topArtists;

      $timeout(photostack, 1); // Create on next digest cycle
    } else {
      console.log('No top artists data');
    }

    function photostack(){
      new Photostack(document.getElementById('photostack'));
    }
   }, function(err){
     console.log(err);
   });


  $http.get("../api/collector?app=goodreads", getConfig).then(function(response){
    var books = response.data.booksRead;
    if(!books) return console.log("No books read data");
    $scope.books = books;

    var pagesRead = 0;
    for(var i=0; i < books.length; i++){
      if(books[i].pages) pagesRead += parseInt(books[i].pages);
    }
    $scope.pagesRead = pagesRead;

    var topBooks = response.data.topBooks;
    var topBooksList = '';
    for(var j=0; j < topBooks.length; j++){
      if(j%2){
        topBooksList += '<b>' + topBooks[j].title + '. </b>';
      } else {
        topBooksList += topBooks[j].title + '. ';
      }
    }
    $scope.topBooksList = $sce.trustAsHtml(topBooksList);


   }, function(err){
     console.log(err);
   });



   $http.get("../api/collector?app=fuelly-avg", getConfig).then(function(response){
     $scope.car = response.data;
    }, function(err){
      console.log(err);
    });

   $http.get("../api/collector?app=trakt", getConfig).then(function(response){
     $scope.trakt = response.data;

     var topMovies = response.data.topMovies;
     if(topMovies){
       var topMoviesList = '';
       for(var i=0; i < topMovies.length; i++){
         if(i%2){
           topMoviesList += '<b>' + topMovies[i].movie.title + '. </b>';
         } else {
           topMoviesList += topMovies[i].movie.title + '.  ';
         }
       }
       $scope.topMoviesList = $sce.trustAsHtml(topMoviesList);
     } else {
       console.log('No top movies data');
     }


     var topShows = response.data.topShows;
     if(topShows){
       var topShowsList = '';
       for(var j=0; j < topShows.length; j++){
         if(j%2){
           topShowsList += '<b>' + topShows[j].show.title + '. </b>';
         } else {
           topShowsList += topShows[j].show.title + '.  ';
         }
       }
       $scope.topShowsList = $sce.trustAsHtml(topShowsList);
     } else {
       console.log('No top shows data');
     }
    }, function(err){
      console.log(err);
    });
});

function genres(data) {
  var genreCounts = [];

  // For each artist
  for(var i=0, x=data.length; i<x; i++) {
    // For each genre
    for(var j=0, y=data[i].genres.length; j<y; j++) {
        var index = _.findIndex(genreCounts, { genre: data[i].genres[j] });

        if(index > -1){
          genreCounts[index].count ++;
        } else {
          genreCounts.push({
            genre: data[i].genres[j],
            count: 1
          });
        }
    }
  }

  genreCounts = _.sortBy(genreCounts, "count"); // Sort (ascending) based on total occurances of a genre across the artists

  var topGenreCount = genreCounts.length > 16 ? 16 : genreCounts.length; // Error handling for when there are less than 15 top genres

  var topGenres = '';

  // Offset by 1 because array index starts at 0
  // Take the genre with the highest count first (desc order)
  for(var k=1, z=topGenreCount; k<z; k++) {
    if(k%2){
      topGenres += '<b>' + genreCounts[genreCounts.length - k].genre + '. </b>';
    } else {
      topGenres += genreCounts[genreCounts.length - k].genre + '.  ';
    }
  }

  return topGenres;
}
