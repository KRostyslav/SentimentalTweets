import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {InfoComponent} from './components/info/info.component';
import {ResultComponent} from './components/result/result.component';
import {AnalysisSongComponent} from './components/analysis-song/analysis-song.component';
import { AnalysisTweetsComponent } from './components/analysis-tweet/analysis-tweet.component';
import {FooterComponent} from './components/footer/footer.component';

import {HttpService} from './services/http-service.service';
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
    HttpModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
