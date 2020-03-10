import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlPrettyPrintComponent } from './url-pretty-print/url-pretty-print.component';
import { JsonPrettyPrintComponent } from './json-pretty-print/json-pretty-print.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'url-prettier',
    pathMatch: 'full'
  },
  {
    path: 'url-prettier',
    component: UrlPrettyPrintComponent
  },
  {
    path: 'json-prettier',
    component: JsonPrettyPrintComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
