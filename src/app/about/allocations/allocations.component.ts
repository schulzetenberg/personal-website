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
      this.processStatesData();
    });
  }

  public clicked() {
    this.expandedToggle = !this.expandedToggle;
    this.processStatesData();
  }

  processStatesData() {
    const filteredData = this.expandedToggle ? this.apiData.filter((x) => x.percent > 0.2) : this.apiData.slice(0, 25);
    const dataTable = [['Name', 'Percent'], ...filteredData.map((x) => [x.label, x.percent])];

    this.geoChartData = {
      dataTable,
      chartType: 'BarChart',
      options: {
        height: filteredData.length * 20 + 250,
        title: 'Portfolio Allocation',
        isStacked: true,
        legend: 'none',
        hAxis: {
          title: 'Percentage',
          minValue: 0,
        },
      },
    };
  }
}
