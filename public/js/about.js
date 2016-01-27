$.getJSON('../api/lastFM', function (data) {
    $('#SongCount').text(data.songCount);
});

$.getJSON('../api/goodreads', function (data) {
    $('#BookCount').text(data.bookCount);
});
