import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavModule } from './sidenav/sidenav.module';
import { UrlPrettyPrintModule } from './url-pretty-print/url-pretty-print.module';
import { TravelMapModule } from './travel-map/travel-map.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SideNavModule,
    UrlPrettyPrintModule,
    TravelMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
