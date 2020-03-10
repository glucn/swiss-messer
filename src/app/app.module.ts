import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavModule } from './sidenav/sidenav.module';
import { UrlPrettyPrintModule } from './url-pretty-print/url-pretty-print.module';
import { JsonPrettyPrintModule } from './json-pretty-print/json-pretty-print.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SideNavModule,
    UrlPrettyPrintModule,
    JsonPrettyPrintModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
