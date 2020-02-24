import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {
	apiUrl = 'http://data.schulzetenberg.com/api';

	httpOptions = {
		headers: new HttpHeaders({
			'token': 'be6d527fb17f753f84abfa4152aff6ca', // TODO: Make this a config value
		})
	};


  constructor(private http: HttpClient) {}

  getGithubData() {
    return this.http.get(`${this.apiUrl}/github`, this.httpOptions);
  }

  getMusicData() {
    return this.http
      .get(`${this.apiUrl}/music`, this.httpOptions)
      .toPromise()
      .then((response) => response);
  }

  getBookData() {
    return this.http
      .get(`${this.apiUrl}/goodreads`, this.httpOptions)
      .toPromise()
      .then((response) => response);
  }

  getTvData() {
    return this.http
      .get(`${this.apiUrl}/trakt`, this.httpOptions)
      .toPromise()
      .then((response) => response);
  }

  getDrivingData() {
    return this.http.get(`${this.apiUrl}/fuelly-avg`, this.httpOptions);
  }

  getStatesData() {
    return this.http
      .get(`${this.apiUrl}/states`, this.httpOptions)
      .toPromise()
      .then((response) => response);
  }

  getPodcastData() {
    return this.http.get(`${this.apiUrl}/player-fm`, this.httpOptions);
  }
}
