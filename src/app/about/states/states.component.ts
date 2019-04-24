import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';

declare var google: any;

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
})
export class StatesComponent implements OnInit {
  geoChartData: {
    chartType: string;
    dataTable: any[];
    options: {};
  };
  visitedStates: number;
  percentVisited: string;

  options = {
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

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getStatesData().then((statesData) => {
      this.processStatesData(statesData);
    });
  }

  processStatesData(data) {
    let visitedStates = 0;

    data.forEach((element) => {
      if (element[1] > 0) {
        visitedStates += 1;
      }
    });

    this.geoChartData = {
      chartType: 'GeoChart',
      dataTable: data,
      options: this.options,
    };

    this.percentVisited = Math.round(visitedStates / 50 * 100) + '%';
    this.visitedStates = visitedStates;
  }
}
