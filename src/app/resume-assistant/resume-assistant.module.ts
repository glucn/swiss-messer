import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResumeAssistantComponent } from './resume-assistant.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextInputHighlightModule } from 'angular-text-input-highlight';

@NgModule({
    declarations: [
      ResumeAssistantComponent,
    ],
    imports: [
      BrowserModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      HttpClientModule,
      TextInputHighlightModule,
    ],
    exports: [
      ResumeAssistantComponent,
    ],
  })
export class ResumeAssistantModule {}
