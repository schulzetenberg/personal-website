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
      anchors: ['github', 'book-stats', 'recently-read', 'music-stats', 'top-artists', 'podcasts', 'tv', 'states', 'countries', 'driving', 'instagram', 'contact'],
      menu: '#menu',
      licenseKey: '',
      // scrollOverflow: true,
      autoScrolling: false,
      // scrollingSpeed: 400,
      // fitToSectionDelay: 100,
      // responsiveSlides: true,
      // responsiveWidth: 1900,
      // scrollHorizontally: false,
      // navigation: true,
      sectionsColor: ['#f4f4f4', '#f4f4f4', '#433e47', '#f4f4f4', '#fff', '#f4f4f4', '#f4f4f4', '#fff', '#f4f4f4', '#f4f4f4', '#f4f4f4', '#f4f4f4'],

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
