import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlPrettyPrintService } from './url-pretty-print.service';

@Component({
  templateUrl: './url-pretty-print.component.html',
  styleUrls: ['./url-pretty-print.component.scss']
})
export class UrlPrettyPrintComponent implements OnInit {
  inputUrl: String = '';
  result$$: BehaviorSubject<String> = new BehaviorSubject('');

  ngOnInit(): void {
  }

  prettyPrint(): void {
    const result = UrlPrettyPrintService.prettyPrint(this.inputUrl);
    this.result$$.next(result);
  }

  get result$(): Observable<String> {
    return this.result$$.asObservable();
  }
}
