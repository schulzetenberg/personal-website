import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.component.html',
  styleUrls: ['./driving.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class DrivingComponent implements OnInit {
  car: {};

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getDrivingData().then(drivingData => this.car = drivingData);
  }

}
