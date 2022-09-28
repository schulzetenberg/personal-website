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

  expandedToggle = false;

  apiData: any;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getAllocationData().then((data) => {
      this.apiData = data;
      this.processAllocationData();
    });
  }

  processAllocationData() {
    const filteredData = this.expandedToggle ? this.apiData.portfolio.filter((x) => x.percent > 0.2) : this.apiData.portfolio.slice(0, 25);
    const tooltip = (x) => `<div class="p-1"><strong>${x.ticker}</strong> <br />${x.percent.toFixed(2)}%</div>`;
    const dataTable = [['Name', 'Percent', { type: 'string', role: 'tooltip', p: { html: true } }], ...filteredData.map((x) => [x.label, x.percent, tooltip(x)])];

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
}
