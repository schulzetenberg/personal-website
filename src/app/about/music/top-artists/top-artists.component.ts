import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../../shared/server.service';

declare let Photostack: any;

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss', './photostack.scss'],
})
export class TopArtistsComponent implements OnInit {
  topArtists: any[];

  photostack: any;

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.getData();
  }

  shuffle() {
    if (this.photostack) {
      // eslint-disable-next-line no-underscore-dangle
      this.photostack._shuffle();
    }
  }

  getData() {
    this.serverService.getMusicData().then((musicData: any) => {
      if (musicData) {
        this.topArtists = musicData.topArtists;

        setTimeout(() => {
          // eslint-disable-next-line
          this.photostack = new Photostack(document.getElementById('photostack'));
        }, 10);
      }
    });
  }
}
