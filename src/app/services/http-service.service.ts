import { Inject, Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';

// Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  private BASE_URL = 'https://api.github.com/users/krostyslav';
  // private BASE_URL = 'https://limitless-meadow-14042.herokuapp.com/artists';
  // private headers = new Headers({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  // });
  // private options = new RequestOptions({ headers: this.headers });

  // private headers: Headers;

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  public getAllTweets() {
    return this.http.get(this.BASE_URL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
