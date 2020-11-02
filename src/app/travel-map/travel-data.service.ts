import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";

export interface Travel {
  fromIATACode: string;
  toIATACode: string;
  date?: Date;
}

@Injectable()
export class TravelDataservice {
  private travelData$$: BehaviorSubject<Travel[]> = new BehaviorSubject([
    {
      fromIATACode: 'PEK',
      toIATACode: 'CDG',
    },
    {
      fromIATACode: 'CDG',
      toIATACode: 'YXE',
    },
  ]);

  get travalData$(): Observable<Travel[]> {
    return this.travelData$$.asObservable();
  }
}
