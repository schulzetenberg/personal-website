import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../../shared/server.service';

declare let google: any;

@Component({
  selector: 'app-diversification',
  templateUrl: './diversification.component.html',
  styleUrls: ['./diversification.component.scss'],
})
export class DiversificationComponent implements OnInit {
  diversificationChartData: {
    chartType: string;
    dataTable: any[];
    options: {};
  };

  apiData: any;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getAllocationData().then((data) => {
      this.apiData = data;
      this.processDiversificationData();
    });
  }

  processDiversificationData() {
    const filteredData = this.apiData.diversification.filter((x) => x.percent > 0.2);
    const tooltip = (x) => `<div class="p-1" style="min-width: 100px;"><strong>${x.name}</strong> <br />${x.percent.toFixed(2)}%</div>`;
    const dataTable = [['Name', 'Percent', { type: 'string', role: 'tooltip', p: { html: true } }], ...filteredData.map((x) => [x.name, x.percent, tooltip(x)])];

    this.diversificationChartData = {
      dataTable,
      chartType: 'PieChart',
      options: {
        tooltip: { isHtml: true },
        height: 350,
        pieHole: 0.4,
        colors: [
          '#0d47a1',
          '#00796b',
          '#512da8',
          '#388e3c',
          '#1976d2',
          '#d32f2f',
          '#433e47',
          '#bb4d00',
          '#0097a7',
          '#c2185b',
          '#212121',
          '#4e342e',
          '#6c6f00',
          '#7b1fa2',
          '#689f38',
          '#0288d1',
        ],
        // backgroundColor: '#f4f4f4',
        chartArea: { width: '90%', height: '82%' },
      },
    };
  }
}
