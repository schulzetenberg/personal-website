import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  getGithubRepos() {
    return this.http.get('/api/collector?app=github')
      .map(
        (response: Response) => {
          var data = response.json();
          return data;
        }
      );
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
}
