import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';

declare let google: any;

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.component.html',
  styleUrls: ['./allocations.component.scss'],
})
export class AllocationsComponent implements OnInit {
  geoChartData: {
    chartType: string;
    dataTable: any[];
    options: {};
  };

  diversificationChartData: {
    chartType: string;
    dataTable: any[];
    options: {};
  };

  expandedToggle = false;

  apiData: any;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getAllocationData().then((data) => {
      this.apiData = data;
      this.processAllocationData();
      this.processDiversificationData();
    });
  }

  processAllocationData() {
    const isDesktop = window.innerWidth >= 1050;
    const filteredData = this.expandedToggle ? this.apiData.portfolio.filter((x) => x.percent > 0.2) : this.apiData.portfolio.slice(0, 25);
    const tooltip = (x) => `<div class="p-1" style="min-width: 135px;"><strong>${x.label}</strong> <br />${x.ticker}<br />${x.percent.toFixed(2)}%</div>`;
    const dataTable = [
      ['Name', 'Percent', { type: 'string', role: 'tooltip', p: { html: true } }],
      ...filteredData.map((x) => [isDesktop ? x.label : x.ticker, x.percent, tooltip(x)]),
    ];

    this.geoChartData = {
      dataTable,
      chartType: 'BarChart',
      // TODO: Use correct blue for bar color
      options: {
        tooltip: { isHtml: true },
        height: filteredData.length * 20 + 250,
        isStacked: true,
        legend: 'none',
        backgroundColor: '#f4f4f4',
        chartArea: { width: '65%', height: '82%', top: '50' },
        hAxis: {
          title: 'Percent of Portfolio',
          minValue: 0,
        },
      },
    };
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
        backgroundColor: '#f4f4f4',
        chartArea: { width: '90%', height: '82%' },
      },
    };
  }
}
