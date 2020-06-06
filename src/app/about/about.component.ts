import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;
declare var twitterFetcher: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None, // tslint:disable-line use-view-encapsulation
})
export class AboutComponent implements OnInit {
  @ViewChild('frame') frame: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    window.onload = () => {
      $('#tweets').flexslider({ directionNav: false, controlNav: false });
    };

    const twitterConfig = {
      profile: { screenName: 'schulzetenberg' },
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
