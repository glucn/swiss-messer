import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UrlPrettyPrintComponent } from './url-pretty-print.component';

@NgModule({
    declarations: [
      UrlPrettyPrintComponent,
    ],
    imports: [
      BrowserModule,
    ],
    exports: [
      UrlPrettyPrintComponent,
    ],
  })
export class UrlPrettyPrintModule {}
