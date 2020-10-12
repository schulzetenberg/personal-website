import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { ServerService } from '../../shared/server.service';

declare var $: any;

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
  encapsulation: ViewEncapsulation.None, // tslint:disable-line use-view-encapsulation
})

export class InstagramComponent implements OnInit {
	instagramData$: Observable<{}>;

  constructor(private serverService: ServerService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
		this.instagramData$ = this.serverService.getInstagramData();
  }

}