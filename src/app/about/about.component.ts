import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

declare var skrollr: any;
declare var $: any;
declare var twitterFetcher: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const s = skrollr.init();
    if (s.isMobile()) {
      s.destroy();
    }

    $.fn.spectragram.accessData = {
      accessToken: '23102384.a39d93a.eb14d0c9397848cb9ea74e440858e625'
    };

    $('.instafeed').each(function () {
      $(this).children('ul').spectragram('getUserFeed', {
        max: 6,
        size: 'medium',
        query: 'schulzetenberg'
      });
    });

    $(window).load(function() {
      $('#tweets').flexslider({ directionNav: false, controlNav: false });
    });

    const twitterConfig = {
      'id': '617415300229677056',
      'domId': '',
      'maxTweets': 5,
      'enableLinks': true,
      'showUser': true,
      'showTime': true,
      'dateFunction': '',
      'showRetweet': false,
      'customCallback': handleTweets,
      'showInteraction': false
    };

    twitterFetcher.fetch(twitterConfig);

    function handleTweets(tweets) {
      const x = tweets.length;
      let n = 0;
      const element = document.getElementById('tweets');
      let html = '<ul class="slides">';

      while (n < x) {
        html += '<li>' + tweets[n] + '</li>';
        n++;
      }

      html += '</ul>';
      element.innerHTML = html;
    }

  }

}
