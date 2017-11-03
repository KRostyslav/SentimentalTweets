import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InfoComponent} from './components/info/info.component';
import { AnalysisTweetsComponent} from './components/analysis-tweet/analysis-tweet.component';
import {AnalysisSongComponent} from './components/analysis-song/analysis-song.component';

export const ROUTES: Routes = [
  { path: '', component: InfoComponent },
  { path: 'tweets', component: AnalysisTweetsComponent },
  { path: 'song', component: AnalysisSongComponent }
  // { path: 'web-page', component: WebComponent },
  // { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
