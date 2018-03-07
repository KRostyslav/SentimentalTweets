import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {ChartsModule} from 'ng2-charts';
import {MomentModule} from 'angular2-moment';
import {NgProgressModule} from 'ngx-progressbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {InfoComponent} from './components/info/info.component';
import {ResultComponent} from './components/result/result.component';
import {AnalysisSongComponent} from './components/analysis-song/analysis-song.component';
import {AnalysisTweetsComponent} from './components/analysis-tweet/analysis-tweet.component';
import {FooterComponent} from './components/footer/footer.component';

import {HttpService} from './services/http-service.service';
import {TokenInterceptor} from './auth/token.interceptor';
import {ROUTES} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ResultComponent,
    AnalysisSongComponent,
    AnalysisTweetsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ChartsModule,
    MomentModule,
    NgbModule.forRoot(),
    NgProgressModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
