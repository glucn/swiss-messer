import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TravelMapComponent } from './travel-map.component';

@NgModule({
    declarations: [
      TravelMapComponent,
    ],
    imports: [
      BrowserModule,
    ],
    exports: [
      TravelMapComponent,
    ],
  })
export class JsonPrettyPrintModule {}
