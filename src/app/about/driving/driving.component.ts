import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.component.html',
  styleUrls: ['./driving.component.scss'],
})
export class DrivingComponent implements OnInit {
  drivingData$: Observable<{}>;

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.drivingData$ = this.serverService.getDrivingData();
  }
}
