import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
})
export class PodcastsComponent implements OnInit {
  podcastData$: Observable<{}>;

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.podcastData$ = this.serverService.getPodcastData();
  }
}
