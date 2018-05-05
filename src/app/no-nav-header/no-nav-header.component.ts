import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-nav-header',
  templateUrl: './no-nav-header.component.html',
  styleUrls: ['./no-nav-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NoNavHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
