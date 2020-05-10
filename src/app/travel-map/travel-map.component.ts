import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { AirportService } from '../airport/airport.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { TravelDataservice } from './travel-data.service';

interface GeoLine {
  latitude: number;
  longitude: number;
}

@Component({
  templateUrl: './travel-map.component.html',
  styleUrls: ['./travel-map.component.scss'],
  providers: [TravelDataservice],
})
export class TravelMapComponent implements OnInit {
  flightLines$: Observable<GeoLine[][]>;

  constructor(private airportService: AirportService, private travelDataservice: TravelDataservice) {}

  ngOnInit(): void {
    const mapChart = am4core.create('chartdiv', am4maps.MapChart);
    mapChart.geodata = am4geodata_worldLow;
    mapChart.projection = new am4maps.projections.Miller();

    const polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ']; // Don't display Antarctica on the map
    mapChart.series.push(polygonSeries);

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.fill = am4core.color('#74B266');

    this.flightLines$ = combineLatest([this.travelDataservice.travalData$, this.airportService.airports$]).pipe(
      map(([travels, airports]) => {
        return travels.map((t) => {
          // TODO: handle the case of not found
          const fromAirport = airports.find((a) => a.iataCode === t.fromIATACode);
          const toAirport = airports.find((a) => a.iataCode === t.toIATACode);
          return [
            {
              latitude: fromAirport.latitude,
              longitude: fromAirport.longitude,
            },
            {
              latitude: toAirport.latitude,
              longitude: toAirport.longitude,
            },
          ];
        });
      })
    );

    const lineSeries = new am4maps.MapLineSeries();
    mapChart.series.push(lineSeries);

    this.flightLines$.subscribe((flightLines) => {
      lineSeries.data = [
        {
          multiGeoLine: flightLines,
        },
      ];
    });
  }
}
