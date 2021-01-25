import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ResumeAssistantService } from './resume-assistant.service';

@Component({
  templateUrl: './resume-assistant.component.html',
  styleUrls: ['./resume-assistant.component.scss'],
  providers: [ResumeAssistantService],
})
export class ResumeAssistantComponent implements OnInit {
  jobPosting: String = '';

  constructor(private resumeAssistantService: ResumeAssistantService) {}

  ngOnInit(): void {}

  analyseJobPosting(): void {
    this.resumeAssistantService.analyse(this.jobPosting).pipe(
      tap(x => console.log(x))
      
    ).subscribe();
  }
}
