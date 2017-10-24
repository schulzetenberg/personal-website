import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Response } from '@angular/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})

export class GithubComponent implements OnInit {
  githubData: {};
  svg:SafeHtml;

  constructor(private serverService: ServerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.serverService.getGithubData().then(githubData => {
      this.githubData = githubData;
      this.svg = this.sanitizer.bypassSecurityTrustHtml(githubData.contribSvg);
    });
  }

}
