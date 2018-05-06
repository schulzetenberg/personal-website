import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-beautify',
  templateUrl: './beautify.component.html',
  styleUrls: ['./beautify.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BeautifyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
