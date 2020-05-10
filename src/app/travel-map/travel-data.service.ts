import { BehaviorSubject, Observable } from 'rxjs';

export interface Travel {
  fromIATACode: string;
  toIATACode: string;
  date?: Date;
}

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
