import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullpage',
  templateUrl: './fullpage.component.html',
  styleUrls: ['./fullpage.component.scss'],
})
export class FullpageComponent implements OnInit {
  config: any;

  fullpage_api: any;

  constructor() {
    this.config = {
      anchors: ['github', 'book-stats', 'recently-read', 'fourthPage'],
      menu: '#menu',
      licenseKey: '',
      // scrollingSpeed: 400,
      // fitToSectionDelay: 100,
      // responsiveSlides: true,
      // responsiveWidth: 1900,
      // scrollHorizontally: false,
      // navigation: true,
      sectionsColor: ['#f4f4f4', '#433e47', '#433e47', '#7BAABE', '#ccddff'],

      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
        // console.log(this.fullpage_api);
        // eslint-disable-next-line camelcase
        // this.fullpage_api.responsiveSlides.toSections();
      },
    };
  }

  ngOnInit() {}

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
