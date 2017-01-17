// Original code from: https://github.com/amerikan/states-visited
  google.load("visualization", "1", {packages:["geochart"]});

app.controller('statesCtrl', function($scope, $http) {
  var states;
  
  $http.get("../api/collector?app=states", {}).then(function(response){
    states = response.data;
    google.setOnLoadCallback(done);
   }, function(err){
     console.log(err);
   });

  function done(){
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
