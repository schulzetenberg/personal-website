import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})

export class InstagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $.fn.spectragram.accessData = {
      accessToken: '23102384.a39d93a.eb14d0c9397848cb9ea74e440858e625',
    };

    $('.instafeed').each(function () {
      $(this).children('ul').spectragram('getUserFeed', {
        max: 6,
        size: 'medium',
        query: 'schulzetenberg',
      });
    });

  }

}
