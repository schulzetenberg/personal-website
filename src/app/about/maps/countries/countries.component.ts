import { Component, OnInit } from '@angular/core';
import { ChartSelectEvent } from 'ng2-google-charts';

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
    options: any;
  };
  visitedCountries: number;
  percentVisited: string;

	// All options found here: https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options
  options = {
    backgroundColor: {
      fill: 'transparent',
    },
    defaultColor: '#433e47',
    legend: 'none',
    displayMode: 'regions',
		resolution: 'countries',
		region: null,
    keepAspectRatio: true,
  };

	countryList: any = [];

	// Continent and region codes can be found here: https://statisticstimes.com/geography/countries-by-continents.php
	continentCodes = {
		'Africa': '002',
		'Antarctica': '010',
		'North America': '021',
		'South America': '005',
		'Europe': '150',
		'Asia': '142',
		'Oceania': '009'
	};

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getCountriesData().then((data) => {
			this.countryList = data;
      this.processCountriesData(data);
    });
  }

	getRegion(countryName) {
		const countryData = this.countryList.find(x => x.country === countryName);
		return this.continentCodes[countryData.continent];
	}

  processCountriesData(data) {
    const dataTable = [['Country'], ...this.countryList.map((x) => [x.country])];

    this.geoChartData = {
      dataTable,
      chartType: 'GeoChart',
      options: this.options,
    };

    this.percentVisited = Math.round(data.length / 197 * 100) + '%';
    this.visitedCountries = data.length;
  }

	public select(event: ChartSelectEvent) {
		if (this.options.region) {
			this.options.region = null;
		} else {
			const clickedCountry = event.selectedRowFormattedValues[0];
			this.options.region = this.getRegion(clickedCountry);
		}

		this.geoChartData = {
      ...this.geoChartData,
      options: {
				...this.options
			}
    };
	}
}

