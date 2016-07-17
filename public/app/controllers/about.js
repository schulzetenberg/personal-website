app.controller('aboutCtrl', function($scope, $http) {

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
