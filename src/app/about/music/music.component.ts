import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  musicData: {};

  avgListening: string;

  totalListening: string;

  totalArtists: string;

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.serverService.getMusicData().then((musicData: any) => {
      this.musicData = musicData;
      const songCount = musicData && musicData.songCount;

      if (songCount) {
        // eslint-disable-next-line no-mixed-operators
        this.avgListening = (((songCount / 365) * 3.5) / 60).toFixed(0);
        this.totalListening = songCount.toFixed(0);
      }

      const artistCount = musicData && musicData.artistCount;

      if (artistCount) {
        this.totalArtists = artistCount.toFixed(0);
      }
    });
  }
}
