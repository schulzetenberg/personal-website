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
  $http.get("../api/lastFM", getConfig).then(function(response){
      $scope.lastFM = response.data;

      var topArtists = response.data.topArtists;
      var artistsList = '';
      for(var i=0; i < topArtists.length; i++){
        artistsList += topArtists[i].artist + '.  ';
      }
      $scope.artistsList = artistsList;

      // Pull out top artist to set in center of collage
      $scope.topArtist = topArtists[0];
      topArtists.splice(0, 1);

      $scope.topArtists = topArtists;

      $timeout(photostack, 1); // Create on next digest cycle

      function photostack(){
        new Photostack( document.getElementById('photostack'));
      }
   },
   function(err){
     console.log(err);
   });


  $http.get("../api/goodreads", getConfig).then(function(response){
      var books = response.data.books;
      if(!books) return console.log("No books data");
      $scope.books = books;

      var pagesRead = 0;
      for(var i=0; i < books.length; i++){
          if(books[i].pages) pagesRead += parseInt(books[i].pages);
      }
      $scope.pagesRead = pagesRead;
   },
   function(err){
     console.log(err);
   });

  $http.get("../api/github", getConfig).then(function(response){
      $scope.repos = response.data.repos;
      $scope.contribSvg = $sce.trustAsHtml(response.data.contribSvg);
   },
   function(err){
     console.log(err);
   });

   $http.get("../api/trakt", getConfig).then(function(response){
       $scope.trakt = response.data;
    },
    function(err){
      console.log(err);
    });


});
