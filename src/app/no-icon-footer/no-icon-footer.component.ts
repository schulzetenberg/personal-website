import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-icon-footer',
  templateUrl: './no-icon-footer.component.html',
  styleUrls: ['./no-icon-footer.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NoIconFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
