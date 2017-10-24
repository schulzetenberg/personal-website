import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../../server.service';

import * as _ from "lodash";

declare var Photostack: any;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})

export class MusicComponent implements OnInit {
  musicData: {};
  topArtistsData: {};
  artistsList = '';
  genresList = '';
  topArtists = [];
  topArtist: {};

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getMusicData().then(musicData => {
      this.musicData = musicData;
      this.artistsList = this.topArtistsParse(musicData.topArtists);
      this.genresList = this.genres(musicData.topArtists);
      this.topArtist = musicData.topArtists[0];
      musicData.topArtists.shift();
      this.topArtists = musicData.topArtists;

      setTimeout(() => {
        new Photostack(document.getElementById('photostack'));
      }, 10);
    });
  }

  topArtistsParse(data) {
    let artists = '';

    if(data && data.length) {
      for(let i=0; i < data.length; i++) {
        if(i%2) {
          artists += '<b>' + data[i].artist + '. </b>';
        } else {
          artists += data[i].artist + '.  ';
        }
      }
    } else {
      console.log('No top artists data');
    }

    return artists;
  }

  genres(data) {
    var genreCounts = [];

    // For each artist
    for(let i=0, x=data.length; i<x; i++) {
      // For each genre
      for(let j=0, y=data[i].genres.length; j<y; j++) {
          let index = _.findIndex(genreCounts, { genre: data[i].genres[j] });

          if(index > -1) {
            genreCounts[index].count ++;
          } else {
            genreCounts.push({
              genre: data[i].genres[j],
              count: 1
            });
          }
      }
    }

    genreCounts = _.sortBy(genreCounts, "count"); // Sort (ascending) based on total occurances of a genre across the artists

    var topGenreCount = genreCounts.length > 16 ? 16 : genreCounts.length; // Error handling for when there are less than 15 top genres
    var topGenres = '';

    // Offset by 1 because array index starts at 0
    // Take the genre with the highest count first (desc order)
    for(let k=1, z=topGenreCount; k<z; k++) {
      if(k%2) {
        topGenres += '<b>' + genreCounts[genreCounts.length - k].genre + '. </b>';
      } else {
        topGenres += genreCounts[genreCounts.length - k].genre + '.  ';
      }
    }

    return topGenres;
  }

}
