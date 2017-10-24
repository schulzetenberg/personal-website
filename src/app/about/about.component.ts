import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

declare var skrollr: any;
declare var $: any;
declare var twitterFetcher: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var s = skrollr.init();
    if (s.isMobile()) {
      s.destroy();
    }

    $.fn.spectragram.accessData = {
      accessToken: '23102384.aad9174.ca58d8df7eac42e095ffb55b6f1cf52a',
      clientID: 'aad9174904814991a8e5a16cff50cdde'
    };

    $('.instafeed').each(function () {
      $(this).children('ul').spectragram('getUserFeed', {
        max: 6,
        size: 'medium',
        query: 'schulzetenberg'
      });
    });

    $(window).load(function(){
      $('#tweets').flexslider({ directionNav: false, controlNav: false });
    });

    var twitterConfig = {
      "id": '617415300229677056',
      "domId": '',
      "maxTweets": 5,
      "enableLinks": true,
      "showUser": true,
      "showTime": true,
      "dateFunction": '',
      "showRetweet": false,
      "customCallback": handleTweets,
      "showInteraction": false
    };

    twitterFetcher.fetch(twitterConfig);

    function handleTweets(tweets){
      var x = tweets.length;
      var n = 0;
      var element = document.getElementById('tweets');
      var html = '<ul class="slides">';
      while(n < x) {
      html += '<li>' + tweets[n] + '</li>';
      n++;
      }
      html += '</ul>';
      element.innerHTML = html;
    }

  }

}
