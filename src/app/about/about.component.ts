import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var skrollr: any;
declare var $: any;
declare var twitterFetcher: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None, // tslint:disable-line use-view-encapsulation
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const s = skrollr.init();
    if (s.isMobile()) {
      s.destroy();
    }

    $(window).load(() => {
      $('#tweets').flexslider({ directionNav: false, controlNav: false });
    });

    const twitterConfig = {
      id: '617415300229677056',
      domId: '',
      maxTweets: 5,
      enableLinks: true,
      showUser: true,
      showTime: true,
      dateFunction: '',
      showRetweet: false,
      customCallback: handleTweets,
      showInteraction: false,
    };

    twitterFetcher.fetch(twitterConfig);

    function handleTweets(tweets) {
      const x = tweets.length;
      let n = 0;
      const element = document.getElementById('tweets');
      let html = '<ul class="slides">';

      while (n < x) {
        html += '<li>' + tweets[n] + '</li>';
        n += 1;
      }

      html += '</ul>';
      element.innerHTML = html;
    }

  }

}
