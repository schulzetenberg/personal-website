import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found-404',
  templateUrl: './not-found-404.component.html',
  styleUrls: ['./not-found-404.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NotFound404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
