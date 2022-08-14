import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  apiUrl = 'https://data.schulzetenberg.com/api';

  httpOptions = {
    headers: new HttpHeaders({
      token: '62d180d0bf93044fa913bbeb96c108dc', // TODO: Make this a config value
    }),
  };

  // eslint-disable-next-line
  constructor(private http: HttpClient) {}

  getGithubData() {
    return this.http.get(`${this.apiUrl}/github`, this.httpOptions);
  }

  getMusicData() {
    return this.http.get(`${this.apiUrl}/music`, this.httpOptions).toPromise();
  }

  getBookData() {
    return this.http.get(`${this.apiUrl}/goodreads`, this.httpOptions).toPromise();
  }

  getTvData() {
    return this.http.get(`${this.apiUrl}/trakt`, this.httpOptions).toPromise();
  }

  getDrivingData() {
    return this.http.get(`${this.apiUrl}/fuelly-avg`, this.httpOptions);
  }

  getStatesData() {
    return this.http.get(`${this.apiUrl}/states`, this.httpOptions).toPromise();
  }

  getCountriesData() {
    return this.http.get(`${this.apiUrl}/countries`, this.httpOptions).toPromise();
  }

  getParksData() {
    return this.http.get(`${this.apiUrl}/parks`, this.httpOptions).toPromise();
  }

  getPodcastData() {
    return this.http.get(`${this.apiUrl}/player-fm`, this.httpOptions);
  }

  getInstagramData() {
    return this.http.get(`${this.apiUrl}/instagram`, this.httpOptions);
  }
}
