import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../server.service';

declare var skrollr: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})

export class AboutComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    var s = skrollr.init();
    if (s.isMobile()) {
      s.destroy();
    }

  }

  repos = this.serverService.getGithubRepos();

  music = this.serverService.getMusic();

}
