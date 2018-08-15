import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Response } from '@angular/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class GithubComponent implements OnInit {
  githubData: {};
  reposCount: Number;
  followersCount: Number;
  followingCount: Number;
  svg: SafeHtml;

  constructor(private serverService: ServerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.serverService.getGithubData().then((githubData) => {
      this.githubData = githubData;
      this.reposCount = githubData && githubData.repos;
      this.followersCount = githubData && githubData.followers && githubData.followers.length;
      this.followingCount = githubData && githubData.following && githubData.following.length;
      this.svg = this.sanitizer.bypassSecurityTrustHtml(githubData.contribSvg);
    });
  }

}
