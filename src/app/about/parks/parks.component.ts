import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss'],
})
export class ParksComponent implements OnInit {
  parkData: any[];

  visitedParks: number;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getParksData().then((parksData) => {
      this.processParksData(parksData);
    });
  }

  processParksData(data) {
    this.parkData = data;
    this.visitedParks = data.length;
  }
}
