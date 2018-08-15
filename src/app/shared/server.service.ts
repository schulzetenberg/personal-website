import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  apiUrl = `http://schulzetenberg.com:8998/api`;

  constructor(private http: Http) {}

  getGithubRepos() {
    return this.http.get(`${this.apiUrl}github`).map((response: Response) => {
      const data = response.json();
      return data;
    });
  }

  getGithubData() {
    return this.http.get(`${this.apiUrl}/github`)
      .toPromise()
      .then(response => response.json());
  }

  getMusicData() {
    return this.http.get(`${this.apiUrl}/music`)
      .toPromise()
      .then(response => response.json());
  }

  getBookData() {
    return this.http.get(`${this.apiUrl}/goodreads`)
      .toPromise()
      .then(response => response.json());
  }

  getTvData() {
    return this.http.get(`${this.apiUrl}/trakt`)
      .toPromise()
      .then(response => response.json());
  }

  getDrivingData() {
    return this.http.get(`${this.apiUrl}/fuelly-avg`)
      .toPromise()
      .then(response => response.json());
  }

  getStatesData() {
    return this.http.get(`${this.apiUrl}/states`)
      .toPromise()
      .then(response => response.json());
  }

  getPodcastData() {
    return this.http.get(`${this.apiUrl}/player-fm`)
      .toPromise()
      .then(response => response.json());
  }

}
