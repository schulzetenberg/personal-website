$.getJSON('../api/lastFM', function (data) {
    // Set the SongCount id in HTML
    $('#SongCount').text(data.songCount);
});
