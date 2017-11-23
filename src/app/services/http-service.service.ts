import {HttpClient, HttpResponse} from '@angular/common/http';
import {Component, OnInit, Input, Inject} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';


// Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';

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

  public getToken(): string {
    // return localStorage.getItem('token');
    console.log('Token ===== ');
    return 'abcdefgh';
  }

  getAllTweets( user ): Observable<any> {
    return this.http.get(BASE_URL + user, options)
      .map(( response: Response ) => {
        this.data = response;
        this.body = JSON.parse(this.data._body);
        return this.body;
      })

      // .catch(err => { throw 'error in source. Details: ' + err;});
    .catch(( error, caught ) => caught);
    // .catch(this.handleError);
  }

  // getAllTweets( user ): Promise<any> {
  //   return this.http.get(BASE_URL + user, options)
  //     .toPromise()
  //     .then(( response: Response ) => {
  //       this.data = response;
  //       this.body = JSON.parse(this.data._body);
  //       return this.body;
  //     })
  //     .catch(this.handleError);
  // }

  private handleError( error: any, caught: Observable<any> ) {
    console.error('An error occurred', error); // for demo purposes only
    // return Promise.reject(error.message || error);
  }

}
