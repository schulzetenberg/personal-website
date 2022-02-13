import { Component } from '@angular/core';

@Component({
  selector: 'app-fullpage',
  templateUrl: './fullpage.component.html',
  styleUrls: ['./fullpage.component.scss'],
})
export class FullpageComponent {
  config: any;

  fullpage_api: any;

  constructor() {
    this.config = {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
      menu: '#menu',

      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      },
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
