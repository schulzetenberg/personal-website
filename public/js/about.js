$(document).ready(function(){
    // Instagram Feed
    jQuery.fn.spectragram.accessData = {
        accessToken: '1406933036.fedaafa.feec3d50f5194ce5b705a1f11a107e0b',
        clientID: 'fedaafacf224447e8aef74872d3820a1'
    };

    $('.instafeed').each(function () {
        $(this).children('ul').spectragram('getUserFeed', {
            query: 'schulzetenberg'
        });
    });

	twitterFetcher.fetch($('#tweets').attr('data-widget-id'), '', 5, true, true, true, '', false, handleTweets);

    $.getJSON('../api/lastFM', function (data) {
        $('#SongCount').text(data.songCount);
    });

    $.getJSON('../api/goodreads', function (data) {
        $('#BookCount').text(data.bookCount);
    });
    
    $.getJSON('../api/github', function (data) {
        $('#repos').text(data.repos);
        $('#contribSvg').html(data.contribSvg);
    });
    
});

$(window).load(function(){
    $('#tweets').flexslider({ directionNav: false, controlNav: false });
});

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
