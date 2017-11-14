import {HttpClient, HttpResponse} from '@angular/common/http';
import {Component, OnInit, Input, Inject} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

let options = {};
const BASE_URL = 'https://twit-sentiment.herokuapp.com/twit/';


@Injectable()
export class HttpService {

  data: any;
  body: any;

  constructor( private http: Http ) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    options = new RequestOptions({headers: headers});
  }

  getAllTweets( user ): Promise<any> {
    return this.http.get(BASE_URL + user, options)
      .toPromise()
      .then(( response: Response ) => {
        this.data = response;
        this.body = JSON.parse(this.data._body);
        console.log(this.body);
        return this.body;
      })
      .catch(this.handleError);
  }

  private handleError( error: any ) {
    console.error('An error occurred', error); // for demo purposes only
    // return Promise.reject(error.message || error);
  }

}
