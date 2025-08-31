import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { ServerService } from '../../shared/server.service';

declare let $: any;

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
  encapsulation: ViewEncapsulation.None, // eslint-disable-line 
})
export class InstagramComponent implements OnInit {
  instagramData$: Observable<{}>;

  constructor(private serverService: ServerService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.instagramData$ = this.serverService.getInstagramData();
  }
}
