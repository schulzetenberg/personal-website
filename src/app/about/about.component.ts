import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
  @ViewChild('frame') frame: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // NOTE: It seems that I am not currently experiencing ad blocking with my site anymore. Will keep the code while monitoring...
    /*
    this.http.get('http://data.schulzetenberg.com/ads.js', { responseType: 'text' }).subscribe(
      (data) => {
        console.log('User is not blocking ads');
      },
      (err: HttpErrorResponse) => {
        if (err && err.status === 0) {
          // Adblock is running. Show the message to the user.
          this.frame.show();
        } else {
          console.error('Uh oh! There was a unexpected error with the ads request', err);
        }
      }
    );
    */

    const s = skrollr.init();
    if (s.isMobile()) {
      s.destroy();
    }

    $(window).load(() => {
      $('#tweets').flexslider({ directionNav: false, controlNav: false });
    });

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
