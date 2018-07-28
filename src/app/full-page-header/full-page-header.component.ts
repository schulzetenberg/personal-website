import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-full-page-header',
  templateUrl: './full-page-header.component.html',
  styleUrls: ['./full-page-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FullPageHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
