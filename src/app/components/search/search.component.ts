import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [ HttpClient ]
})
export class SearchComponent implements OnInit {

// (@Input) account = '';

  constructor(private HttpService: HttpService) {
  }

  ngOnInit() {
  }

  onKey(value: string) {
    console.log('Get me tweets', value);

  }

  onSubmit(account: String) {
    console.log('Get me tweets', account);
    // this.HttpService.getAllTweets()
    //   .subscribe(
    //     response => {
    //       // this.usersList = response.data;
    //       console.log(response);
    //     },
    //     error => {
    //       console.log(error);
    //       alert(`Can't get users.`);
    //     }
    //   );
  }

}
