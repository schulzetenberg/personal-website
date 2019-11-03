import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../../shared/server.service';

declare var google: any;

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['../maps.scss', './countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  geoChartData: {
    chartType: string;
    dataTable: any[];
    options: {};
  };
  visitedCountries: number;
  percentVisited: string;

  options = {
    backgroundColor: {
      fill: 'transparent',
    },
    defaultColor: '#433e47',
    legend: 'none',
    displayMode: 'regions',
    keepAspectRatio: true,
  };

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    // TODO: Get data from server
    // this.serverService.getStatesData().then((statesData) => {
    //   this.processStatesData(statesData);
    // });

    this.processStatesData(null);
  }

  processStatesData(data) {
    // See here for the whole list: https://github.com/nioya/All-Countries-For-Google-GeoChart/blob/master/geochart-country-name.html
    const countryList = [
      'United States',
      'Mexico',
      'Canada',
      'Belgium',
      'United Kingdom',
      'France',
      'Italy',
      'Netherlands',
      'Bahamas',
      'Barbados',
      'Puerto Rico',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Martin (French part)',
      'Sint Maarten (Dutch part)',
      'United States of America',
      'United States Minor Outlying Islands',
      'Virgin Islands (British)',
      'Virgin Islands (U.S.)',
    ];

    const dataTable = [['Country'], ...countryList.map((country) => [country])];

    this.geoChartData = {
      dataTable,
      chartType: 'GeoChart',
      options: this.options,
    };

    this.percentVisited = Math.round(countryList.length / 195 * 100) + '%';
    this.visitedCountries = countryList.length;
  }
}
