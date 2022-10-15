import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  musicData: {};

  genreCounts = [];

  avgListening: string;

  totalListening: string;

  totalArtists: string;

  pastYear = ' <small class="ml-1">PAST YEAR</small>';

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

      if (musicData) {
        // TODO: Use this data again
        this.genreCounts = this.genres(musicData.topArtists);
      }
    });
  }

  genres(data) {
    let genreCounts = [];

    // For each artist
    if (data && data.length) {
      for (let i = 0, x = data.length; i < x; i += 1) {
        // For each genre
        for (let j = 0, y = data[i].genres.length; j < y; j += 1) {
          const index = _.findIndex(genreCounts, { genre: data[i].genres[j] });

          if (index > -1) {
            genreCounts[index].count += 1;
          } else {
            genreCounts.push({
              genre: data[i].genres[j],
              count: 1,
            });
          }
        }
      }
    } else {
      console.log('No genres data');
    }

    // Sort (ascending) based on total occurances of a genre across the artists
    genreCounts = _.sortBy(genreCounts, 'count');
    const reducedList = genreCounts.slice(0, 5);

    return reducedList;
  }
}
