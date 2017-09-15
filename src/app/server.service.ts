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
          console.log("HERE!!")
          var data = response.json();
          return data.repos;
        }
      );
  }

  getMusic() {
    return this.http.get('/api/collector?app=music')
      .map(
        (response: Response) => {
          var data = response.json();
          console.log(data);
          return response.json();
        }
      );
  }
}
