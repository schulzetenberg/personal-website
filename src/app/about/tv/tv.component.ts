import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  topMoviesList: {};
  topShowsList: {};
  avgTv: String;
  avgMovies: String;

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService.getTvData().then((tvData) => {
      this.processTvData(tvData);
    });
  }

  processTvData(data) {
    const numMinTv = data && data.stats && data.stats.episodes && data.stats.episodes.minutes;

    if (numMinTv && data.totalDays) {
      this.avgTv = (numMinTv / data.totalDays).toFixed(0) + ' Minutes'; // Round to int value of minutes;
    }

    const numMinMovies = data && data.stats && data.stats.movies && data.stats.movies.minutes;

    if (numMinMovies && data.totalDays) {
      this.avgMovies = (numMinMovies / data.totalDays).toFixed(0) + ' Minutes';
    }

    const topMovies = data.topMovies;

    if (topMovies) {
      let topMoviesList = '';

      for (let i = 0; i < topMovies.length; i += 1) {
        if (i % 2) {
          topMoviesList += '<b>' + topMovies[i].movie.title + '. </b>';
        } else {
          topMoviesList += topMovies[i].movie.title + '.  ';
        }
      }

      this.topMoviesList = topMoviesList;
    } else {
      console.log('No top movies data');
    }

    const topShows = data.topShows;

    if (topShows) {
      let topShowsList = '';

      for (let j = 0; j < topShows.length; j += 1) {
        if (j % 2) {
          topShowsList += '<b>' + topShows[j].show.title + '. </b>';
        } else {
          topShowsList += topShows[j].show.title + '.  ';
        }
      }

      this.topShowsList = topShowsList;
    } else {
      console.log('No top shows data');
    }
  }
}
