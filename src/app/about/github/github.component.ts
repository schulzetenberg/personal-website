import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  // NOTE: In order to properly style the SVG we cannot have view encapsulation
  encapsulation: ViewEncapsulation.None, // eslint-disable-line 
})
export class GithubComponent implements OnInit {
  githubData$: Observable<{}>;

  constructor(private serverService: ServerService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.githubData$ = this.serverService.getGithubData();
  }
}
