import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { ServerService } from '../../server.service';

declare var google: any;

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})

export class StatesComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    google.load("visualization", "1", {packages:["geochart"]}); // Original code from: https://github.com/amerikan/states-visited

    this.serverService.getStatesData().then(statesData => {
      google.setOnLoadCallback(function() { processStatesData(statesData); });
    });
  }

}

function processStatesData(data) {
  var visitedStates = 0;

  for (let i=0; i < data.length; i++) {
    if (data[i][1] > 0) visitedStates++;
  }

  var chartData = new google.visualization.DataTable();
  chartData.addColumn('string', 'State');
  chartData.addColumn('number', 'Value');
  chartData.addColumn({type: 'string', role: 'tooltip'});
  chartData.addRows(data);

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

  chart.draw(chartData, options);

  // UI update
  document.getElementById('visitedStates').innerHTML = visitedStates + '';
  document.getElementById('totalStates').innerHTML = data.length + '';
  document.getElementById('percent').innerHTML = Math.round(visitedStates / data.length * 100) + '%';
}
