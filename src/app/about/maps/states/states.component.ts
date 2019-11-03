import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../../shared/server.service';

declare var google: any;

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['../maps.scss', './states.component.scss'],
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
    },
    defaultColor: '#433e47',
    legend: 'none',
    displayMode: 'regions',
    resolution: 'provinces',
    region: 'US',
    keepAspectRatio: true,
  };

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getStatesData().then((statesData) => {
      this.processStatesData(statesData);
    });
  }

  processStatesData(data) {
    const dataTable = [['State'], ...data.map((state) => [state])];

    this.geoChartData = {
      dataTable,
      chartType: 'GeoChart',
      options: this.options,
    };

    this.percentVisited = Math.round(data.length / 50 * 100) + '%';
    this.visitedStates = data.length;
  }
}
