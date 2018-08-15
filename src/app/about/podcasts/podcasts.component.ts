import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
})
export class PodcastsComponent implements OnInit {
  podcasts: any[];

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {

    this.serverService.getPodcastData().then((podcastData) => {
      this.processBookData(podcastData);
    });
  }

  processBookData(data) {
    if (!data || !data.podcasts) {
      return console.log('No podcast data!');
    }

    this.podcasts = data.podcasts;
  }

}
