var USER_ID = "41826442";
var DEV_KEY = getgoodReadsKey();
//number of books read in the past amount of days
var numDays = 90;
var pastDate = new Date(); 
pastDate.setDate(pastDate.getDate() - numDays)
var count = 0;
var url = "http://www.goodreads.com/review/list/" + USER_ID + "?format=xml&key=" + DEV_KEY + "&sort=shelves&v=2&shelf=read&sort=date_read&per_page=200";

$( document ).ready(function() {

    //API Call, Using yahoo to avoid CORS issues.
    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + url + '"') + '&format=xml&callback=?';
    $.getJSON(yql, function(data){
    var bookCount = parseXML(data.results[0]);
	
    // Set the BookCount id in HTML
    $('#BookCount').text(bookCount);
    });    
});

function parseXML(data) {
    xmlDoc = $.parseXML(data)
    $xml = $(xmlDoc);
	readDate = $xml.find("review").find("read_at");
	
	//determine number of books read in the past x days
    for (i = 0; i < readDate.length; i++) {
		if (new Date(readDate[i].textContent).getTime() >= pastDate){
			count++;
		}
	}
	return count;
}
