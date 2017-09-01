import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InfoComponent} from './components/info/info.component';
import { SearchComponent} from './components/search/search.component';

export const ROUTES: Routes = [
  { path: '', component: InfoComponent },
  { path: 'search', component: SearchComponent }
  // { path: 'web-page', component: WebComponent },
  // { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
