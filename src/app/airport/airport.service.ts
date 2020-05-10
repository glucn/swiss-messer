import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Airport {
  id: number;
  name: string;
  city: string;
  country: string;
  iataCode: string;
  icaoCode: string;
  latitude: number;
  Longitude: number;
  altitueInFeet: number;
  timezoneUTCOffset: number;
  dst: string; // TODO: change to enum?
  timezoneTZ: string;
  type: string; // TODO: change to enum
  source: string;
}


@Injectable({providedIn: 'root'})
export class AirportService {
  airports$: Observable<Airport[]>;

  constructor(private httpClient: HttpClient) {
    this.airports$ = this.httpClient.get('./assets/airport-data/airports.dat',  {responseType: 'text'}).pipe(
      map(file => {
        const dataLines = file.split(/\r\n|\n/);

        return dataLines
        .filter(line => line.trim().length > 0)
        .map(
          line => {
            const data = line.split(',');
            const unquotePattern = /^"(.+(?="$))"$/;

            return {
              id: Number(data[0]),
              name: data[1].replace(unquotePattern, '$1'),
              city: data[2].replace(unquotePattern, '$1'),
              country: data[3].replace(unquotePattern, '$1'),
              iataCode: data[4].replace(unquotePattern, '$1'),
              icaoCode: data[5].replace(unquotePattern, '$1'),
              latitude: Number(data[6]),
              Longitude: Number(data[7]),
              altitueInFeet: Number(data[8]),
              timezoneUTCOffset: Number(data[9]),
              dst: data[10].replace(unquotePattern, '$1'),
              timezoneTZ: data[11].replace(unquotePattern, '$1'),
              type: data[12].replace(unquotePattern, '$1'),
              source: data[13].replace(unquotePattern, '$1'),
            };
          }
        );
      })
    );
  }
}
