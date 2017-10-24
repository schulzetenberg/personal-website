import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TvComponent implements OnInit {
  trakt: {};
  topMoviesList: {};
  topShowsList: {};

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getTvData().then(tvData => {
      this.processTvData(tvData);
    });
  }


  processTvData(data) {
    this.trakt = data;

    var topMovies = data.topMovies;
    if(topMovies){
      var topMoviesList = '';

      for(let i=0; i < topMovies.length; i++){
        if(i%2){
          topMoviesList += '<b>' + topMovies[i].movie.title + '. </b>';
        } else {
          topMoviesList += topMovies[i].movie.title + '.  ';
        }
      }

      this.topMoviesList = topMoviesList;
    } else {
      console.log('No top movies data');
    }


    var topShows = data.topShows;
    if(topShows){
      var topShowsList = '';

      for(let j=0; j < topShows.length; j++){
        if(j%2){
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
