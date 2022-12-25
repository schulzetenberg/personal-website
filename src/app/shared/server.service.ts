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

  getInstagramData() {
    return this.http.get(`${this.apiUrl}/instagram`, this.httpOptions);
  }
}
