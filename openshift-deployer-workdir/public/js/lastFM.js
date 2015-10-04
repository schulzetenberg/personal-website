var varRequest = requestUri()

function requestUri() {
	var apiKey = getLastFMKey();
    var firstPartRequest = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=waterland15&limit=1&page=1&api_key=" + apiKey + "&format=json&from=";

    //need to do date conversion to epoch & append the from and to dates to the end of the request
    var fromDate = getEpochTime() - getDaysEpoch(90);
    var toDate = getEpochTime();
    var uri = firstPartRequest + fromDate + "&to=" + toDate;
    return uri;
}

function getEpochTime() {
    return Math.round(new Date().getTime() / 1000.0)
}

function getDaysEpoch(numDays) {
    //Convert # of days to epoch number
    //86400 is the value for one day
    return 86400 * numDays;
}

$.getJSON(varRequest, function (json) {
    // Set variable from the results
    var songcount = json.recenttracks["@attr"].total;

    // Set the SongCount id in HTML
    $('#SongCount').text(songcount);
});