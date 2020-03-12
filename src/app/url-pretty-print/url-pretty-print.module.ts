import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UrlPrettyPrintComponent } from './url-pretty-print.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
      UrlPrettyPrintComponent,
    ],
    imports: [
      BrowserModule,
      MatButtonModule,
      MatInputModule,
    ],
    exports: [
      UrlPrettyPrintComponent,
    ],
  })
export class UrlPrettyPrintModule {}
