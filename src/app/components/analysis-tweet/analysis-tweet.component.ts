import {Component, OnInit} from '@angular/core';
import {Form, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {HttpService} from '../../services/http-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './analysis-tweet.component.html',
  styleUrls: [ './analysis-tweet.component.css' ],
  providers: [ HttpClient ]
})
export class AnalysisTweetsComponent implements OnInit {

// (@Input) account = '';

  chartVisible = false;
  chartOptions = {
    responsive: true
  };

  public chartData: any[] = [
    {data: [ 0.8, 0, 0.1, 0, 0.1, 0, 0.1, 0, 0.1, 0, 0.1, 0, 0.1, 0, 0.1, 0, 0.1, 0, 0.1, 0 ], label: ''}
  ];

  chartLabels = [ '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', ];

  data: any;
  tmp: string;

  constructor( private HttpService: HttpService ) {
    // console.log(this.chartData);
  }

  ngOnInit() {
  }


  onChartClick( event ) {
    console.log(event);
  }

  onKey( value: string ) {
    console.log('Get me tweets', value);
  }

  onSubmit( account: string ) {
    console.log('Get me tweets', account);
    this.HttpService.getAllTweets(account)
      .then(( response: Response ) => {
        this.data = response;

        let clone: Array<any> = [];
        let data: Array<any> = [];
        clone[ 0 ] = this.chartData;
        for (let i = 0; i < this.data.length; i++) {
          data[ i ] = this.data[ i ].sentiment.comparative;
        }
        clone[ 0 ][ 'data' ] = data;
        clone[ 0 ][ 'label' ] = account;

        this.chartData = clone;
        this.chartVisible = true;

      });
  }


}
