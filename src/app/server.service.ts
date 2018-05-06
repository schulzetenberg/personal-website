import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  getGithubRepos() {
    return this.http.get('/api/collector?app=github').map((response: Response) => {
      const data = response.json();
      return data;
    });
  }

  getGithubData() {
    return this.http.get('/api/collector?app=github')
      .toPromise()
      .then(response => response.json());
  }

  getMusicData() {
    return this.http.get('/api/collector?app=music')
      .toPromise()
      .then(response => response.json());
  }

  getBookData() {
    return this.http.get('/api/collector?app=goodreads')
      .toPromise()
      .then(response => response.json());
  }

  getTvData() {
    return this.http.get('/api/collector?app=trakt')
      .toPromise()
      .then(response => response.json());
  }

  getDrivingData() {
    return this.http.get('/api/collector?app=fuelly-avg')
      .toPromise()
      .then(response => response.json());
  }

  getStatesData() {
    return this.http.get('/api/collector?app=states')
      .toPromise()
      .then(response => response.json());
  }

  getPodcastData() {
    return this.http.get('/api/collector?app=player-fm')
      .toPromise()
      .then(response => response.json());
  }

}
