// Original code from: https://github.com/amerikan/states-visited
  google.load("visualization", "1", {packages:["geochart"]});

app.controller('statesCtrl', function($scope, $http) {
  google.setOnLoadCallback(done);
  function done(){
    //0: never visited
    //1: visited
    //2: lived
    var states = [
      [{v: 'US-AK', f: 'Alaska'}, 0, ''],
      [{v: 'US-AL', f: 'Alabama'}, 1, ''],
      [{v: 'US-AZ', f: 'Arizona'}, 2, ''],
      [{v: 'US-AR', f: 'Arkansas'}, 1, ''],
      [{v: 'US-CA', f: 'California'}, 1, ''],
      [{v: 'US-CO', f: 'Colorado'}, 2, ''],
      [{v: 'US-CT', f: 'Connecticut'}, 0, ''],
      [{v: 'US-DE', f: 'Delaware'}, 0, ''],
      [{v: 'US-FL', f: 'Florida'}, 1, ''],
      [{v: 'US-GA', f: 'Georgia'}, 1, ''],
      [{v: 'US-HI', f: 'Hawaii'}, 0, ''],
      [{v: 'US-ID', f: 'Idaho'}, 0, ''],
      [{v: 'US-IL', f: 'Illinois'}, 1, ''],
      [{v: 'US-IN', f: 'Indiana'}, 1, ''],
      [{v: 'US-IA', f: 'Iowa'}, 1, ''],
      [{v: 'US-KS', f: 'Kansas'}, 1, ''],
      [{v: 'US-KY', f: 'Kentucky'}, 1, ''],
      [{v: 'US-LA', f: 'Louisiana'}, 0, ''],
      [{v: 'US-ME', f: 'Maine'}, 0, ''],
      [{v: 'US-MD', f: 'Maryland'}, 1, ''],
      [{v: 'US-MA', f: 'Massachusetts'}, 0, ''],
      [{v: 'US-MI', f: 'Michigan'}, 1, ''],
      [{v: 'US-MN', f: 'Minnesota'}, 2, ''],
      [{v: 'US-MS', f: 'Mississippi'}, 0, ''],
      [{v: 'US-MO', f: 'Missouri'}, 1, ''],
      [{v: 'US-MT', f: 'Montana'}, 1, ''],
      [{v: 'US-NE', f: 'Nebraska'}, 1, ''],
      [{v: 'US-NV', f: 'Nevada'}, 1, ''],
      [{v: 'US-NH', f: 'New Hampshire'}, 0, ''],
      [{v: 'US-NJ', f: 'New Jersey'}, 0, ''],
      [{v: 'US-NM', f: 'New Mexico'}, 1, ''],
      [{v: 'US-NY', f: 'New York'}, 0, ''],
      [{v: 'US-NC', f: 'North Carolina'}, 0, ''],
      [{v: 'US-ND', f: 'North Dakota'}, 2, ''],
      [{v: 'US-OH', f: 'Ohio'}, 1, ''],
      [{v: 'US-OK', f: 'Oklahoma'}, 1, ''],
      [{v: 'US-OR', f: 'Oregon'}, 0, ''],
      [{v: 'US-PA', f: 'Pennsylvania'}, 0, ''],
      [{v: 'US-RI', f: 'Rhode Island'}, 0, ''],
      [{v: 'US-SC', f: 'South Carolina'}, 0, ''],
      [{v: 'US-SD', f: 'South Dakota'}, 1, ''],
      [{v: 'US-TN', f: 'Tennessee'}, 1, ''],
      [{v: 'US-TX', f: 'Texas'}, 1, ''],
      [{v: 'US-UT', f: 'Utah'}, 1, ''],
      [{v: 'US-VT', f: 'Vermont'}, 0, ''],
      [{v: 'US-VA', f: 'Virginia'}, 1, ''],
      [{v: 'US-WA', f: 'Washington'}, 0, ''],
      [{v: 'US-WV', f: 'West Virginia'}, 1, ''],
      [{v: 'US-WI', f: 'Wisconsin'}, 1, ''],
      [{v: 'US-WY', f: 'Wyoming'}, 0, '']
    ];

    var visitedStates = 0;
    for (var i=0; i < states.length; i++) {
      if (states[i][1] > 0) visitedStates++;
    }

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Value');
    data.addColumn({type: 'string', role: 'tooltip'});
    data.addRows(states);

    var options = {
      backgroundColor: {
        fill: 'transparent',
        stroke: 'blue'
      },
       colorAxis: {
         // unvisited, visited, lived
         colors: ['#F4F4F4', '#433e47', '#58535B']
      },
      legend: 'none',
      displayMode: 'regions',
      resolution: 'provinces',
      region: 'US',
      keepAspectRatio: true
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regionsDiv'));

    chart.draw(data, options);

    // UI update
    document.getElementById('visitedStates').innerHTML = visitedStates;
    document.getElementById('totalStates').innerHTML = states.length;
    document.getElementById('percent').innerHTML = Math.round(visitedStates / states.length * 100) + '%';
  }
});
