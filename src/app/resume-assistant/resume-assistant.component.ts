import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlightTag } from 'angular-text-input-highlight';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Entity, ResumeAssistantService } from './resume-assistant.service';

@Component({
  templateUrl: './resume-assistant.component.html',
  styleUrls: ['./resume-assistant.component.scss'],
  providers: [ResumeAssistantService],
  encapsulation: ViewEncapsulation.None,
})
export class ResumeAssistantComponent implements OnInit {
  jobPostingId: string = '';
  jobPosting: string = '';

  tags$$: BehaviorSubject<HighlightTag[]> = new BehaviorSubject([]);

  get tags$(): Observable<HighlightTag[]> {
    return this.tags$$.asObservable();
  }

  constructor(private resumeAssistantService: ResumeAssistantService) {}

  ngOnInit(): void {}

  loadJobPosting(): void {
    this.resumeAssistantService.getJobPosting(this.jobPostingId).pipe(
      tap(console.log)
    ).subscribe(
      resp => {
        this.jobPosting = resp.job_description;
        this.analyseJobPosting();
      }
    )
  }

  analyseJobPosting(): void {
    this.resumeAssistantService.analyse(this.jobPosting).pipe(
      tap(console.log),      
    ).subscribe(
      (entities: Entity[]) => {
        this.tags$$.next(
          entities.map(entity => ({
            indices: { start: entity.start, end: entity.end },
            cssClass: 'bg-blue',
          }))
        )
      } 
    );
  }

  clear(): void {
    this.jobPosting = '';
    this.tags$$.next([]);
  }
}
