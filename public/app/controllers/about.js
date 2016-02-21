app.controller('aboutCtrl', function($scope, $http) {

  $.fn.spectragram.accessData = {
      accessToken: '1406933036.fedaafa.feec3d50f5194ce5b705a1f11a107e0b',
      clientID: 'fedaafacf224447e8aef74872d3820a1'
  };

  $('.instafeed').each(function () {
      $(this).children('ul').spectragram('getUserFeed', {
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
  $http.get("../api/lastFM", getConfig)
  .then(
     function(response){
      $scope.songCount = response.data.songCount;
     },
     function(err){
       console.log(err);
     }
  );


  $http.get("../api/goodreads", getConfig)
  .then(
     function(response){
      $scope.bookCount = response.data.bookCount;
     },
     function(err){
       console.log(err);
     }
  );

  $http.get("../api/github", getConfig)
  .then(
     function(response){
      $scope.repos = response.data.repos;
      $('#contribSvg').html(response.data.contribSvg);
     },
     function(err){
       console.log(err);
     }
  );

});
