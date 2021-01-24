import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlPrettyPrintComponent } from './url-pretty-print/url-pretty-print.component';
import { TravelMapComponent } from './travel-map/travel-map.component';
import { ResumeAssistantComponent } from './resume-assistant/resume-assistant.component';
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
    path: 'travel-map',
    component: TravelMapComponent
  },
  {
    path: 'resume-assistant',
    component: ResumeAssistantComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
