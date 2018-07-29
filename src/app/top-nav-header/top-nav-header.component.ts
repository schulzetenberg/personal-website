import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-nav-header',
  templateUrl: './top-nav-header.component.html',
  styleUrls: ['./top-nav-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TopNavHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
