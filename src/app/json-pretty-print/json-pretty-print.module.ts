import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonPrettyPrintComponent } from './json-pretty-print.component';

@NgModule({
    declarations: [
      JsonPrettyPrintComponent,
    ],
    imports: [
      BrowserModule,
    ],
    exports: [
      JsonPrettyPrintComponent,
    ],
  })
export class JsonPrettyPrintModule {}
