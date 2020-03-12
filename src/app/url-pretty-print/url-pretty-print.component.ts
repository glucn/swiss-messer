import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlPrettyPrintService } from './url-pretty-print.service';

@Component({
  templateUrl: './url-pretty-print.component.html',
  styleUrls: ['./url-pretty-print.component.scss']
})
export class UrlPrettyPrintComponent implements OnInit {
  result$$: BehaviorSubject<string> = new BehaviorSubject('');

  ngOnInit(): void {
  }

  prettyPrint(): void {
    const result = UrlPrettyPrintService.prettyPrint('https://google.com?a=123&b=234&c');
    this.result$$.next(result);
  }

  get result$(): Observable<string> {
    return this.result$$.asObservable();
  }
}
