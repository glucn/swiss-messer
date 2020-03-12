import { TestBed } from '@angular/core/testing';

import { UrlPrettyPrintService } from './url-pretty-print.service';

describe('UrlPrettyPrintService', () => {
  let service: UrlPrettyPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlPrettyPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
