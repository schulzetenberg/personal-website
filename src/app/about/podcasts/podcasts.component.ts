import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class PodcastsComponent implements OnInit {
  podcasts: any[];

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {

    this.serverService.getPodcastData().then(podcastData => {
      this.processBookData(podcastData);
    });
  }

  processBookData(data) {
    console.log(data)
    if (!data || !data.podcasts) {
      return console.log('No podcast data!')
    };

    this.podcasts = data.podcasts;
  }

}
