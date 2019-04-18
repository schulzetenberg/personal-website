import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';

declare var google: any;

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
})
export class StatesComponent implements OnInit {
  geoChartData: any;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getStatesData().then((statesData) => {
      this.processStatesData(statesData);
    });
  }

  processStatesData(data) {
    let visitedStates = 0;

    for (let i = 0; i < data.length; i += 1) {
      if (data[i][1] > 0) {
        visitedStates += 1;
      }
    }

    const options = {
      backgroundColor: {
        fill: 'transparent',
        stroke: 'blue',
      },
      colorAxis: {
        // unvisited, visited, lived
        colors: ['#F4F4F4', '#433e47', '#58535B'],
      },
      legend: 'none',
      displayMode: 'regions',
      resolution: 'provinces',
      region: 'US',
      keepAspectRatio: true,
      title: 'States Visited',
      tooltip: {
        trigger: 'none',
      },
    };

    this.geoChartData = {
      options,
      chartType: 'GeoChart',
      dataTable: data,
    };

    // UI update
    document.getElementById('visitedStates').innerHTML = visitedStates + '';
    document.getElementById('totalStates').innerHTML = data.length + '';
    document.getElementById('percent').innerHTML = Math.round(visitedStates / data.length * 100) + '%';
  }
}
