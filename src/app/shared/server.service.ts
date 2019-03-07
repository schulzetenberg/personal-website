import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
  apiUrl = `http://schulz-portfolio.ddns.net:8998/api`;

  constructor(private http: HttpClient) {}

  getGithubData() {
    return this.http
      .get(`${this.apiUrl}/github`)
      .toPromise()
      .then((response) => response);
  }

  getMusicData() {
    return this.http
      .get(`${this.apiUrl}/music`)
      .toPromise()
      .then((response) => response);
  }

  getBookData() {
    return this.http
      .get(`${this.apiUrl}/goodreads`)
      .toPromise()
      .then((response) => response);
  }

  getTvData() {
    return this.http
      .get(`${this.apiUrl}/trakt`)
      .toPromise()
      .then((response) => response);
  }

  getDrivingData() {
    return this.http
      .get(`${this.apiUrl}/fuelly-avg`)
      .toPromise()
      .then((response) => response);
  }

  getStatesData() {
    return this.http
      .get(`${this.apiUrl}/states`)
      .toPromise()
      .then((response) => response);
  }

  getPodcastData() {
    return this.http
      .get(`${this.apiUrl}/player-fm`)
      .toPromise()
      .then((response) => response);
  }
}
