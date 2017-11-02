import {Component, OnInit} from '@angular/core';
import {Form, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {HttpService} from '../../services/http-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [ HttpClient ]
})
export class SearchComponent implements OnInit {

// (@Input) account = '';
  data: any;
  tmp: string;

  constructor( private HttpService: HttpService ) {
  }

  ngOnInit() {
  }

  onKey( value: string ) {
    console.log('Get me tweets', value);
  }

  onSubmit( account: string ) {
    this.tmp = account;
    console.log('Get me tweets', account);
    this.HttpService.getAllTweets(account)
      .then(( response: Response ) => {
        this.data = response;
      });
  }

}
