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
    {data: [], label: 'Negative'},
    {data: [], label: 'Positive'}
  ];

  chartLabels = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ];

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Negative', 'Positive', 'Netral' ];
  public doughnutChartData: number[] = [ 350, 450, 100 ];
  public doughnutChartType: string = 'doughnut';

  data: any;
  account: string;
  tmp: string;
  positive = 0;
  negative = 0;
  netral = 0;

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
        this.account = account;
        this.positive = 0;
        this.negative = 0;
        this.netral = 0;
        this.setDataForChart(this.data);
        // this.setDataLabel(this.data);
        this.chartVisible = true;
      });
  }

  private setDataForChart( tweets ) {
    let clone = JSON.parse(JSON.stringify(this.chartData));
    const dataPositive = [];
    const dataNegative = [];
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[ i ].sentiment.comparative > 0) {
        dataPositive[ i ] = tweets[ i ].sentiment.comparative;
        dataNegative[ i ] = 0;
      } else {
        dataNegative[ i ] = tweets[ i ].sentiment.comparative;
        dataPositive[ i ] = 0;
      }
      this.setCountSentimentalTweets(tweets[ i ].sentiment.comparative);
    }
    clone[ 0 ].data = dataNegative;
    clone[ 1 ].data = dataPositive;

    this.chartData = clone;
  }

  private setDataLabel( tweets ) {
    let clone: Array<any> = [];
    for (let i = 0; i < tweets.length; i++) {
      clone[ i ] = tweets[ i ].date;
    }
    this.chartLabels = clone;
  }

  private setCountSentimentalTweets( tweet ) {

    let clone = [];
    if (tweet > 0) {
      this.positive++;
    }
    else if (tweet < 0) {
      this.negative++;
    }
    else {
      this.netral++;
    }
    clone[ 0 ] = this.negative;
    clone[ 1 ] = this.positive;
    clone[ 2 ] = this.netral;
    this.doughnutChartData = clone;
  }
}
